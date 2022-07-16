//read file in non blocking way via 
const fs = require('fs')
const express = require('express')

const app = express()

//send file via http in non blocking way 
app.get('/config', (req, res) => {
    const fileName = './src/assets/config.txt'
    const options = {
        encoding: 'UTF-8'
    }
    fs.readFile(fileName, options, (err, data) => {
        if (err) throw err;
        console.log(data)
        res.end(data);
    })
})

app.listen(3000, () => {
    console.log('Express Server is Running!')
})