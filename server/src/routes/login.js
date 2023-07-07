const express=require("express");
const routerLogin=express.Router();

routerLogin.post("/login",(req,res)=>
{   
    console.log(req.body)
    res.send("Login Page")
}
);

module.exports=routerLogin;