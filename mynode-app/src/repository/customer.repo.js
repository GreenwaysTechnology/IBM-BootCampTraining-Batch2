
class CustomerRepository {
    findAll() {
        return [{
            id: 1,
            name: 'Subramanian',
            city: 'Coimbatore'
        },
        {
            id: 2,
            name: 'Karthik',
            city: 'Chennai'
        },
        {
            id: 3,
            name: 'Arun',
            city: 'Delhi'
        }
        ]
    }
}

module.exports = CustomerRepository