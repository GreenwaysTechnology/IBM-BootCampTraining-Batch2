
class CustomerService {
    constructor(customerRepo) {
        this.customerRepo = customerRepo
    }
    findAll() {
        return this.customerRepo.findAll()
    }
}
module.exports = CustomerService