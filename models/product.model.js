const mongoose = require('mongoose') ;

const productSchema = mongoose.Schema({
       name:{
        type:String,
        require:true
       },
       price:{
        type:Number,
        require:true
       },
      image:{
        type:String,
        require:true
       },
       discount:{
        type:Number,
        default:0
       },
       bgcolor:{
        type:String
       },
       panelcolor:{
        type:String
       },
       textcolor:{
        type:String
       }
})

module.exports = mongoose.model('product',productSchema) ;