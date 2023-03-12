const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const jwt = require('jsonwebtoken'),
    config = require('../../config/config').getConfig(),
    jwtkey = config.JWT_SECRET,
    jwtExpirationTime = config.JWT_EXPIRATION_TIME;

class Auth {
    initSchema() {
        const schema = new Schema({
            'token': {
                'type': String,
                'required': true,
            },
            'user': {
                'type': Schema.Types.ObjectId,
                'required': true,
                'ref': 'user',
            }
        }, {'timestamps': true})

        schema.statics.generateToken = async function (user) {
            // create new jwt token with user details
            try{
                const token = await jwt.sign({
                    '_id': user._id.toString(),
                    'username': user.username,
                    'email': user.email,
                    'name': user.name
                }, jwtkey, {
                    'algorithm': 'HS256',
                    'expiresIn': jwtExpirationTime
                })

                return token;

            } catch(err){
                throw err;
            }
        }

        schema.statics.decodeToken = async function (token) {
            // decode the provided token
            try {
                return await jwt.verify(token, jwtkey);
            }catch(err) {
                throw err;
            }
        }

        try{
            mongoose.model('auth', schema);
        }catch(err){

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('auth');
    }
}

module.exports = {Auth}