const express= require('express');
const mongoose = require('mongoose')
require("dotenv").config();
const {farmerRouter} =require('./routes/alldata/alldata.route')
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
  res.send("hii there");
});

app.use(farmerRouter);

const MONGO_URL = process.env.MONGODB_URI || "mongodb+srv://dlip:123@cluster0.qwketrx.mongodb.net/?retryWrites=true&w=majority";


 


mongoose.connection.once('open',()=>{
   console.log('mongoDB connection ready!')
 })
 mongoose.connection.on('error',(err)=>{
 console.error(err);
 })

async function StartServer(){
   await mongoose.connect(MONGO_URL,{
     useNewUrlParser:true,
    //useFindAndModify:false,
   //  useCreateIndex:true,
     useUnifiedTopology:true,
   });
   
   app.listen(PORT,()=>{
      console.log(`listening ar port ${PORT}`);
     })
   
 }
 
 StartServer();



