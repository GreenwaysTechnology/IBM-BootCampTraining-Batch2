//how to build non blocking web apps
const http = require('http')


//create server 
const server =http.createServer((req,res)=>{
    res.end('Hello Web')
})

//start web server
server.listen(3000,()=>{
    console.log('HTTP Server is running!')
})