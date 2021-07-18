const instance = require('./base')

class CategoryService {
    getAll(){
        return instance.get('/categorys');
    }
}

module.exports = new CategoryService()