const mongoose = require('mongoose')

const landInfoSchema = new mongoose.Schema({
  district:{
    type:String
  },
  taluka:{
    type:String
  },
  village:{
    type:String
  },
  surveyNumber:{
    type:Number
  },
  UPIN:Number,
  landDetails:{
    totalArea:{
        hect:Number,
        area:Number,
        sqMt:Number
    },
    landUse:String,
    owner:String,
  }
}) 




module.exports =  mongoose.model("landInfo",landInfoSchema);


