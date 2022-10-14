const mongoose = require('mongoose')

const marketPlaceSchema = new mongoose.Schema({
    yardname:String,
    vegtables:[{
    name:String,
    maxprice:String,
    minprice:String,
    unit:String,
    image:String
    }],
    fruits:[{
        name:String,
        maxprice:String,
        minprice:String,
        unit:String,
        image:String
        }],
    cerels:[{
        name:String,
        maxprice:String,
        minprice:String,
        unit:String,
        image:String
        }],
    pulses:[{
        name:String,
        maxprice:String,
        minprice:String,
        unit:String,
        image:String
        }]
}) 




module.exports =  mongoose.model("marketPlace",marketPlaceSchema);


