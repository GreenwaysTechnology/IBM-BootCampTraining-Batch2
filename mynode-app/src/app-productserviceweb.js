//how to build non blocking web apps
const http = require('http')
const ProductRepository = require('./repository/product.repo')
const ProductService = require('./services/product.service')

const productService = new ProductService(new ProductRepository())

//create server 
const server = http.createServer((req, res) => {
    const data = JSON.stringify(productService.findAll())
    res.writeHead(200,{
        'Content-Type': 'application/json'
    })
    res.end(data)
})

//start web server
server.listen(3000, () => {
    console.log('HTTP Server is running!')
})