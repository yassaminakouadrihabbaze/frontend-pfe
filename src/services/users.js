const instance = require('./base')

class UserService {
    login(data){
        return instance.post('/login', data);
    }
    register(data){
        return instance.post('/user', data);
    }
}

module.exports = new UserService()