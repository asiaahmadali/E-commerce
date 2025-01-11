const express = require('express') ;
const router = express.Router() ;
const ownerModel = require('../models/owner.model');


// create route only for development
if(process.env.NODE_ENV === 'development'){
    router.post('/create',(req,res)=>{
        res.send('create route working') ;
    })
} 

//  default route
router.get('/',(req,res)=>{
    res.send('owner route') ;
})


// post route

router.post('/create',(req,res)=>{
    res.send('its working')
})
module.exports = router ;
