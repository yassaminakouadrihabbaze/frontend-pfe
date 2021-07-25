const instance = require('./base')

class ProductService {
    getAll(){
        return instance.get('/products');
    }
    create(data){
        return instance.post('/products',data);
    }
}

module.exports = new ProductService()