const mongoose=require('mongoose')
const validator=require('validator')
const emailModel=new mongoose.Schema({
    user:{
        type:String,
        // unique:true,
        required:[true,'please provide email'],
         validate:{
            validator:validator.isEmail,
            message:'email is not valid'
        }

    }
   })

module.exports=mongoose.model('EmailGroup',emailModel)