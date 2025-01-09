const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
   fullname:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true
   },
   password:{
    type:String,
    require:true
   },
  
   products:{
    type:Array,
    default:[]
   },
   
   picture:{
    type:String
   },
   gstin:{
    type:String,
   }
})
module.exports = mongoose.model('owner', ownerSchema) ;
