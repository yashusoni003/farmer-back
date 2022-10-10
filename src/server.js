const express= require('express');
const mongoose = require('mongoose')
const {farmerRouter} =require('./routes/alldata/alldata.route')
const PORT= 7000
const app = express();
app.use(express.json());

app.use(farmerRouter)

const MONGO_URL="mongodb://127.0.0.1:27017/farmer"
 


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



