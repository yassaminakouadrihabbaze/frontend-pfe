const instance = require('./base')

class ProductService {
    getAll(){
        return instance.get('/products');
    }
}

module.exports = new ProductService()