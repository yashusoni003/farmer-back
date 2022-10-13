const marketDB = require('./market.mongo')

 const getMarketPrice=async ()=>{
     const result =  await marketDB.find({},{"__v":0,"_id":0}) ;
    return result; 
}

 const postMarketPrice=async(body)=>{
    console.log("creating market");
    const result = await marketDB.updateOne(body,body,{upsert:true});
     return result;
}

module.exports={
    getMarketPrice,
    postMarketPrice
}