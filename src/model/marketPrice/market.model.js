const marketDB = require('./market.mongo')

 const getMarketPrice=async (place)=>{
     const result =  await marketDB.findOne({yardname:place},{"__v":0,"_id":0,yardname:0});
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