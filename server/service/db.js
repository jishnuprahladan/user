
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/userdetails",{useNewUrlParser:true})

const User=mongoose.model('User',{
    id:String,
    name:String, 
    email:String, 
    password:String, 

})

module.exports={
    User
}
