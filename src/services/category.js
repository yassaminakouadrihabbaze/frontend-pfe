const instance = require('./base')

class CategoryService {
    getAll(){
        return instance.get('/categorys');
    }
    create(data){
        return instance.post('/categorys', data);
    }
    remove(id){
        return instance.delete('/categorys/'+id);
    }
}

module.exports = new CategoryService()