const express=require("express");
const routerReg=express.Router();

routerReg.post("/register",(req,res)=>
{
    console.log(req.body)
    res.send("Register Page")
}
);

module.exports=routerReg;