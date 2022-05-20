const express=require("express");
const bodyParser=require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app=express()
app.use(bodyParser.urlencoded({extended:true}))



app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmi.html")
    
})
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
    
})
app.post("/bmi.html",function(req,res){
    var num1 =Number(req.body.num1)
    var num2=Number(req.body.num2)
    var result =num1+num2
    res.send("THe total is"+result)
})

app.post("/",function(req,res){
var num1 =parseFloat(req.body.num1)
var num2=parseFloat(req.body.num2)
var result =num1/( num2*num2)
 
 res.send("tYour BMI is " + result)

})
app.listen(3000,function(){
    console.log("Port 3000 is  listenning ")
})
