  const {getLandDetails,postLandDetails,getLandByNameDetails}=require('../../model/land/land.model')
  
const httpGetLandDetails =async (req,res)=>{
    const body=req.body;
    const upin =req.params.upin;
   //  const userId = req.body.userId;
     const result = await getLandDetails(upin);
     res.status(200).json(result);
}

const httpPostLandDetails=async (req,res)=>{
  const data = req.body;
  console.log(data);
  const result = await postLandDetails(data);
  res.status(201).json(result);
 
}

const httpGetLandByNameDetails=async (req,res)=>{
  const data = req.body;
  const result = await getLandByNameDetails(data);
  res.status(201).json(result);
 
}

module.exports={
    httpGetLandDetails,
    httpPostLandDetails,
    httpGetLandByNameDetails
}