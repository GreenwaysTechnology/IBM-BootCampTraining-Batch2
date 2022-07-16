const CustomerRepository = require('../repository/customer.repo')
const CustomerService = require('../services/customer.service')

const express = require('express')
const customerRouter = express.Router()

const customerService = new CustomerService(new CustomerRepository())


customerRouter.get('/list', (req, res) => {
    res.json(customerService.findAll())
})

module.exports = customerRouter
