const mongoose = require("mongoose");
const {Schema} = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10;

class User {
    initSchema() {
        const schema = new Schema({
            'name': {
                'type': String,
                'required': true
            },
            'username': {
                'type': String,
                'required': true,
                'unique': true
            },
            'email': {
                'type': String,
                'required': true,
                'unique': true
            },
            'password': {
                'type': String,
                'required': true,
                'select': false
            },
            'status': {
                'type': Boolean,
                'required': true,
                'default': true
            }
        }, {'timestamps': true})

        // pre save hook
        schema.pre('save', function (next) {
            const user = this

            // only hash the password if it has been modified or changed
            if(this.isModified('password') || this.isNew) {
                bcrypt.genSalt(SALT_WORK_FACTOR, (err,salt) => {
                    if(err) {
                        return next(err)
                    }

                    bcrypt.hash(user.password, salt, (hashErr, hash) => {
                        if(hashErr) {
                            next(hashErr)
                        }

                        // override the clear text password with hashed one
                        user.password = hash;
                        next()
                    })
                })
            } else {
                return next();
            }
        })

        // compare password
        schema.methods.comparePassword = async function (candidatePassword) {
            return new Promise((resolve, reject) => {
                bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(isMatch);
                    }
                })
            })
        }

        schema.statics.findByEmail = function (email) {
            return this.findOne({ 'email': email})
        }

        // schema.plugin(uniqueValidator);
        try{
            mongoose.model('user', schema);
        }catch(err){

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('user');
    }
}

module.exports = {User};