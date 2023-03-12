const {UserService} = require('./UserService')
const {HttpResponse} = require('../../system/helpers/HttpResponse')
const mongoose = require('mongoose')

class AuthService{
    constructor(model, userModel) {
        this.model = model
        this.userService = new UserService(userModel);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.logout = this.logout.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    async login(email, password) {
        const user = await this.userService.findByEmail(email, true);

        if(!user) {
            // user not found
            const error = new Error('User not found');

            error.statusCode = 422;
            throw error;
        } else {
            // process to login
            try{
                // compare password
                const passwordMatched = await user.comparePassword(password);

                if(!passwordMatched) {
                    const error = new Error('Invalid password');

                    error.statusCode = 422;
                    throw error;
                }

                // if email and password are valid proceed to create a token
                const token = await this.model.generateToken(user);

                await this.model.create({'token': token, 'user': new mongoose.mongo.ObjectId(user._id)});
                const tokenData = await this.model.findOne({'token': token}).populate('user');

                return new HttpResponse(tokenData);
            }catch(error) {
                throw error;
            }
        }
    }

    async register(data) {
        try{
            return await this.userService.insert(data);
        }catch(error) {
            throw error;
        }
    }

    async changePassword(id, data) {
        try{
            const updatePassword = await this.userService.updatePassword(id, data);

            return new HttpResponse(updatePassword);
        }catch(error) {
            throw error;
        }
    }

    async logout(token) {
        try{
            await this.model.deleteOne(token);
            return new HttpResponse({'logout': true});
        }catch(error) {
            throw error;
        }
    }

    async checkLogin(token) {
        try{
            // check if token is in the database
            const storedToken = await this.model.countDocuments({token});

            if(!storedToken){
                const error = new Error('Invalid token');

                error.statusCode = 401;
                throw error;
            }
            // check if the token is valid jwt token
            const user = await this.model.decodeToken(token);
            if(!user) {
                const error = new Error('Invalid token');

                error.statusCode = 401;
                throw error;
            }

            // check the extracted user is active in the database
            const userInDb = await this.userService.get(user._id);
            if(userInDb.data && userInDb.data.status) {
                return userInDb.data
            }
            
            const error = new Error('Invalid token');

            error.statusCode = 401;
            throw error;

        }catch(e) {
            const error = new Error('Invalid token');

            error.statusCode = 401;
            throw error;
        }
    }
}

module.exports = {AuthService}