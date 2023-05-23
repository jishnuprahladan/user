const cors = require('cors')
const dataservice = require('./service/dataService')
const express = require("express")


const app = express()

app.use(express.json())

app.use(cors({ origin: 'http://localhost:3000' }))

app.post('/register',(req,res)=>{
    dataservice.register(req.body.id,req.body.name, req.body.email, req.body.password).then(result => {
    
        res.status(result.statusCode).json(result)
        console.log(result);
    })
})

app.post('/login',(req,res)=>{
    dataservice.login(req.body.email, req.body.password).then(result => {
  
        res.status(result.statusCode).json(result)
        console.log(result);
    })
})

app.listen(8000, () => { console.log("server start at 8000"); })