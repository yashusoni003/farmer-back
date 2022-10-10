  const {getfarmer,createfarmer} = require('../../model/allData/alldata.model')
  
  
  const getFarmerById =async (req,res)=>{
       const userId = req.body.userId;
       const result = await getfarmer(userId);
       res.status(200).json(result);
  }

 const postFarmer=async (req,res)=>{
    const data = req.body;
    console.log(data);
    const result = await createfarmer(data);
    res.status(201).json(result);
   
  }

  module.exports={
    getFarmerById,
    postFarmer
  }