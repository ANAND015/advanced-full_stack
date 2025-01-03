var mdb=require('mongoose')

var adminSchema=mdb.Schema({
    firstName:String,
    lastName:String,
    email:String
})

var admin_schema=mdb.model("admin",adminSchema)
module.exports=admin_schema