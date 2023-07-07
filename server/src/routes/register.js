const express=require("express");
const router=express.Router();

router.get("/register",(req,res)=>
{
    res.send("perect ok")
}
);

module.exports=router;