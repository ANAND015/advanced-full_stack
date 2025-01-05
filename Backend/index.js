const express = require("express");
const path = require("path");
const app = express();
var mdb = require("mongoose");
var cors=require("cors")
var env=require('dotenv')
env.config()
const PORT = 3001;
var User =require("./Models/users")
var Admin =require("./Models/admin")

app.use(express.json())
app.use(cors())
mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDb_Connection_successfull");
  })
  .catch((err) => {
    console.log("Check your connection string");
  });
// app.get("/", (req, res) => {
//   res.send("Welcome to Backend Server");
// });

// app.use(express.static(path.join(__dirname, "public")));
// app.get("/static", (req, res) => {
//   res.sendFile("C:/Advanced Full Stack Training/Backend/public/index.html");
// });

// app.get("/json", (req, res) => {
//   res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
// });

app.post('/signup',(req,res)=>{
    // var {firstName,lastName,email}=req.body
    // console.log(firstName,lastName,email);
    try{
      // var newUser=new User({
      //   firstName:firstName,
      //   lastName:lastName,
      //   email:email
      // })
      var newUser=new User(req.body)
      newUser.save()
      res.status(200).send("User Added Successfully")
      console.log("User Added Successfully")
    }
    catch(err){
      console.log("error")
    }

})
app.post('/admin',(req,res)=>{
  // var{firstName,lastName,email,password}=req.body
  // console.log(firstName,lastName,email,password)
  try{
    // var newAdmin=new Admin({
    //   firstName:firstName,
    //   lastName:lastName,
    //   email:email,
    //   password:password
    // })
    
    newAdmin.save();
    res.status(200).send("Added to Admin Successfully")
    console.log("Successfully added")
  }
  catch{
    console.log("Error")
  }
})

app.get('/getsignup',async (req,res)=>{
  try{
    var allSignUpRecords=await User.find()
    res.json(allSignUpRecords)
    console.log("All Data Formatted")
  }
  catch(err){
    console.log(err);
    res.send(err)
  }
})

app.post('/login',async (req,res)=>{
  var {email,password}=req.body
  try{
    var existingUser=await User.findOne({email:email});
    if(existingUser){
      if(existingUser.password!=password){
        res.json({message:"Invalid Credentails",isLoggedIn:false});
      }
      else{
        res.json({message:"Login Successful",isLoggedIn:true,firstName:existingUser.firstName});
      }
    }else{
      res.json({message:"Login Failed" , isLoggedIn:false})
    }
  }
  catch(err){
    console.log("Login failed");
  }
})

app.post('/footer',(req,res)=>{
  const {Name,Email}=req.body;
  try{

  }catch(err){}
})

app.listen(PORT, () => {
  console.log(`Backend Server Started \n Url: http://localhost:${PORT}`);
});