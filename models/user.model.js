const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
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
   cart:{
    type:Array,
    default:[]
   },
  
   orders:{
    type:Array,
    default:[]
   },
   contact:{
    type:Number
   },
   picture:{
    type:String
   }
})
module.exports = mongoose.model('user', userSchema) ;
