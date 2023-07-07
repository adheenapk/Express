const express=require("express");
const app=express();
app.use(express.json());

const HomeRoute=require("./routes/home");
const LoginRoute=require("./routes/login");
const RegRoute=require("./routes/register");

app.use("/",HomeRoute);
app.use("/",LoginRoute);
app.use("/",RegRoute);

app.listen(8007,()=>
{
    console.log("server listening at port 8007")
}
);