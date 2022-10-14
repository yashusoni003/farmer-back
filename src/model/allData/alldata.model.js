const farmerdb = require('./alldata.mongo');

const getfarmer = async(userId)=>{
    console.log(userId);
const result = await farmerdb.find({userId:userId},{"__v":0,"_id":0});
return result[0];
}
const getallfarmer = async()=>{
const result = await farmerdb.find({},{__v:0,_id:0});
return result;
}
const createfarmer= async(farmerInfo)=>{
    console.log("creating farmer");
    const result = await farmerdb.updateOne(farmerInfo,farmerInfo,{upsert:true});
     return result;
}

module.exports = {getfarmer,createfarmer,getallfarmer}