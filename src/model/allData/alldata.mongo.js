const mongoose = require('mongoose')

const farmerInfoSchema = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  perinfo:{
  firstName:{
    type:String,
    required:true
  },
  middleName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  adhar :{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  district:{
    type:String,
    required:true
  },
  taluko:{
    type:String,
    required:true
  },
  village:{
    type:String,
    required:true
  },
  homeAddrs:{
    type:String,
    required:true
  },
  dob:{
    type:String,
    required:true
  }
  },
  comminfo:{
    mobileNumber:{
     type:String,
     required: true  
    },
    email:{
     type:String,
     required: true  
    }
 },
 farmInfo:{

    district:{
        type:String,
        required:true
    },
    taluka:{
        type:String,
        required:true
    },
    village:{
        type:String,
        required:true
    },
    surveyNum:{
        type:String,
        required:true
    },
    upin:{
        type:String,
        required:true
    }
},
  yeildInfo:{
    landTitle:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    cropName:{
        type:String,
        required:true
    },
    quintity:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    },
    cropType:{
        type:String,
        required:true
    },
    harvestTech:{
        type:String,
        required:true
    },
  },
  bankInfo:{
    bankName:{
        type:String,
        required:true
    },
    branchName:{
        type:String,
        required:true
    },
    taluka:{
        type:String,
        required:true
    },
    accountNumber:{
        type:String,
        required:true
    },
    ifsc:{
        type:String,
        required:true
    }
  }
}) 


       
// personInfoSchema.pre('save',async function(next){
//   next();
// })

module.exports =  mongoose.model("farmerInfo",farmerInfoSchema);


