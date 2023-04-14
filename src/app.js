const fs=require("fs");
const path=require("path");
const express=require("express");

const app=new express();

app.set('views',path.join(__dirname,'views'));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));

const accountData=fs.readFileSync(path.join(__dirname,'json/accounts.json'));
const accounts=JSON.parse(accountData);

const userData=fs.readFileSync(path.join(__dirname,'json/users.json'));
const users=JSON.parse(accountData);
ap.get("/",function(req,res){
    res.render('index',{title:'Account Summary',accounts:accounts});
});
ap.get("/savings",function(req,res){
    res.render('account',{account:accounts.savings});
});
ap.get("/checking",function(req,res){
    res.render('account',{account:accounts.checking});
});
ap.get("/credit",function(req,res){
    res.render('account',{account:accounts.credit});
});
ap.get("/profile",function(req,res){
    res.render('profile',{user:users[0]});
});

app.listen(3000,()=>{
    console.log("server running on port 3000");
});