const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/BagShop');

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
   isadmin:{
    type:Boolean
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
