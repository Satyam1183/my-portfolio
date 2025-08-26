const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;
const path=require("path");
const Skills=require("./models/portfolio")
const expressLayouts = require("express-ejs-layouts");


const MONGO_URL="mongodb://127.0.0.1:27017/portfolioDB";

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(expressLayouts);
app.set("layout", "./home/boilerplate");

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());




main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("err");
});

async function main() {
    await mongoose.connect(MONGO_URL);
}




app.get("/myportfolio",(req,res)=>{
    res.render("profile/index",{Skills});
})
app.get("/about",(req,res)=>{
    res.render("includes/about");
});
app.get("/skills",(req,res)=>{
    res.render("profile/skills");
});
app.get("/myservices",(req,res)=>{
    res.render("profile/services");
})
app.get("/projects",(req,res)=>{
    res.render("profile/project");
})
app.listen(port,()=>{
    console.log(`lisning at port ${port}`)
})