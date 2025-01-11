const express = require('express') ;
const router = express.Router() ;
const ownerModel = require('../models/owner.model');


// create route only for development
if(process.env.NODE_ENV === 'development'){
    router.post('/create',async (req,res)=>{
        const owners = await ownerModel.find();
        if(owners.length > 0) return res.status(503).send('no permission for new owner') ;

        const {fullname, email, password} = req.body ;
        const createdowner = ownerModel.create({
              fullname,
              email,
              password
        })
        res.send(createdowner)
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
