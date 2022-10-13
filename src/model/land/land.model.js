const landDb =require('./land.mongo')

 const getLandDetails=async (body)=>{
    const {district,taluka,village,surveyNumber,UPIN}=body;
     const result = UPIN ? await landDb.find({UPIN:UPIN},{"_id":0,"__v":0}) :await landDb.find({district,taluka,village,surveyNumber},{"_id":0,"__v":0});
    return result; 
}

 const postLandDetails=async(body)=>{
    console.log("creating land");
    const result = await landDb.updateOne(body,body,{upsert:true});
     return result;
}

module.exports={getLandDetails,postLandDetails}