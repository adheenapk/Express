const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>
{
    res.send("home")
}
);
router.post("/login",(req,res)=>
{
    res.send("login")
}
);
router.post("/register",(req,res)=>
{ 
    console.log(req.body)
    res.send("register")
}
);
module.exports=router;

