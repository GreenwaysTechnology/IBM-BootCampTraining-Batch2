const ProductRepository = require('../repository/product.repo')
const ProductService = require('../services/product.service')

const productService = new ProductService(new ProductRepository())


//router module
const express = require('express')
const productRouter = express.Router()

//get == HTTP GET 
productRouter.get('/list', (req, res) => {
    res.json(productService.findAll())
})

module.exports = productRouter
