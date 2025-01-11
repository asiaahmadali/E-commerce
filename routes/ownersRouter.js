const express = require('express') ;
const router = express.Router() ;
const ownerModel = require('../models/owner.model');

router.get('/',(req,res)=>{
    res.send('owner route') ;
})


if(process.env === 'development'){
    console.log('hey') ;
}

// post route

router.post('/create',(req,res)=>{
    res.send('its working')
})
module.exports = router ;
