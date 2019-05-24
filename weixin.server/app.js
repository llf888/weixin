//app.js
//1:复制服务器端模块
//2:引入第三方模块
//  mysql/express/
const mysql = require("mysql");
const express = require("express");
//引入跨域模块
const cors=require("cors");
//引入session组件
const session=require("express-session");


//3:创建连接池
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"foot"
});
//4:创建express对象
var server = express(); 

//在server对象下面配置session
server.use(session({
  secret:"128字符串",   //配置密钥
  resave:true,         //每次请求是否更新数据
  saveUninitialized:true //是否保存初始化数据
}))




//5:绑定监听端口 3000
server.listen(3000);
server.use(express.static("public"));

server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))


server.get("/chao",(req,res)=>{
    var sql="select * from home"
    pool.query(sql,(err,result)=>{
      if(err)throw err
      res.send({code:1,data:result})
    })
})
server.get("/choose",(req,res)=>{
    var sql="select * from choose"
    pool.query(sql,(err,result)=>{
      if(err)throw err
      res.send({code:1,data:result})
    })
})
server.get("/list",(req,res)=>{
    var sql="select * from list"
    pool.query(sql,(err,result)=>{
      if(err)throw err
      res.send({code:1,data:result})
    })
})






