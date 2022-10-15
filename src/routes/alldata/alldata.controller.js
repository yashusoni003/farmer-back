  const {getfarmer,createfarmer,getallfarmer,findregfarmer,getMobileById} = require('../../model/allData/alldata.model');
  
  
  const getFarmerById =async (req,res)=>{
      const userId=req.params.id;
     //  const userId = req.body.userId;
       const result = await getfarmer(userId);
       res.status(200).json(result);
  }
  const getAllFarmers =async (req,res)=>{
       const result = await getallfarmer();
       res.status(200).json(result);
  }

 const postFarmer=async (req,res)=>{
    const data = req.body;
    console.log(data);
    const result = await createfarmer(data);
    res.status(201).json(result);
   
  }

  const getNofarmers= async(req,res)=>{
    const state=req.params.state;
    const dist=req.params.dist;
    const result = await findregfarmer(state,dist);
    res.status(201).json(result);
  }
  const httpgetMobileById= async(req,res)=>{
    const id=req.params.id;
    const result = await getMobileById(id);
    res.status(201).json(result);
  }
  


  module.exports={
    getFarmerById,
    postFarmer,
    getAllFarmers,
    getNofarmers,
    httpgetMobileById
  }