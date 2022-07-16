
class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo
    }
    findAll() {
        return this.productRepo.findAll()
    }
}
module.exports = ProductService