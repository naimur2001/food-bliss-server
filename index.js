const express=require('express');
const app=express();
const port =process.env.PORT || 5000 ;
const datas=require('./Data.json');
const recipes=require('./Recipe.json');

// cors
const cors=require('cors');
app.use(cors());

// app get and listen
app.get("/",(req,res)=>{

  res.send("Server is Running.");
  
   });
  //  
   app.listen(port,()=>{

    console.log(`Server's Port : ${port}`)
  
   })
  //  getting data and recipe (for extra section section)

  app.get('/datas',(req,res)=>{
res.send(datas)
  })
  app.get('/recipes',(req,res)=>{
res.send(recipes)
  })