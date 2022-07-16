const express = require('express')
const ProductRepository = require('./repository/product.repo')
const ProductService = require('./services/product.service')

const CustomerRepository = require('./repository/customer.repo')
const CustomerService = require('./services/customer.service')

const productService = new ProductService(new ProductRepository())
const customerService = new CustomerService(new CustomerRepository())

//create application object 
const app = express();

//Expose REST API

//get == HTTP GET 
app.get('/api/products/list',(req,res)=>{
      res.json(productService.findAll())
})

//
app.get('/api/customers/list',(req,res)=>{
    res.json(customerService.findAll())
})
//payments


//start server 

app.listen(3000, () => {
    console.log('Express Server is Running!!...')
})

