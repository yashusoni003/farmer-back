const mongoose = require('mongoose')

const marketPlaceSchema = new mongoose.Schema({
    name:String,
    maxprice:Number,
    minprice:Number,
    unit:String
}) 




module.exports =  mongoose.model("marketPlace",marketPlaceSchema);


