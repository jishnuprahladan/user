const db = require('./db')

const register = (id,name,email,password) => {

    return db.User.findOne({ id }).then(user => {                                  
      if (user) {
        return {
          status: false,
          message: "user already exisist",
          statusCode: 401
        }
      } else {
        const newUser = new db.User({
          id:id,
          name: name,
          email:email,
          password: password,
        
        })
     
        newUser.save()
        return {
          status: true,
          message: "register success",
          statusCode: 200
        }
      }
    })
  }
  login = (email,password) => {

    return db.User.findOne({ email, password}).then(user => {
      if (user) {
        currentUser = user.name

        return {
          status: true,
          message: "login success",
          statusCode: 200,
          currentUser
        }
      } else {
        return {
          status: false,
          message: "incorrect account no or passward",
          statusCode: 401
        }
      }
    })
}
  module.exports = {
    register,
    login
  }