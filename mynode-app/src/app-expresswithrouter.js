const express = require('express')
const productRouter = require('./routers/product.router')
const customerRouter = require('./routers/customer.router')

//create application object 
const app = express();

//bind router with main app object
app.use('/api/products', productRouter)
app.use('/api/customers', customerRouter)


app.listen(3000, () => {
    console.log('Express Server is Running!!...')
})

