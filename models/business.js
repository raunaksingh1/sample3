const mongoose=require('mongoose')
const Schema=mongoose.Schema

const newBusiness=new Schema({
    name:{
        type:String,
        // required:true

    },
    business_number:{
        type:String
    },
    gst_number:{
        type:String,

    }

})
const business=mongoose.model('business',newBusiness)
module.exports=business