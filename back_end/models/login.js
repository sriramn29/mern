var mdb = require('mongoose')

const loginSchema = new mdb.Schema({
    name: {type:String},
    email: {type:String, unique: true},
    password: {type:String},
})

const login_module = mdb.model('user',loginSchema)
module.exports = login_module
/*{
    name:string,
    email:string,
    password:string
}*/