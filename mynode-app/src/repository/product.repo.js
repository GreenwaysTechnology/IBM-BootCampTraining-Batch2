

class ProductRepository {
    findAll() {
        return [{
            id: 1,
            name: 'Mobile'
        },
        {
            id: 2,
            name: 'TV'
        },
        {
            id: 3,
            name: 'Computers'
        }

        ]
    }
}
//
module.exports = ProductRepository