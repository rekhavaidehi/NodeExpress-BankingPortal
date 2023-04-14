const fs=require("fs");
const path=require("path");
const express=require("express");

const app=new express();

app.set('view',__dirname+'/src/views');
app.set("view engine","ejs");
app.use(express.static(__dirname+'src/public'));

app.listen(3000);