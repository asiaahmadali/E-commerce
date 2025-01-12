const mongoose = require('mongoose') ;
const config = require('config') ;
const dbgr = require('debug')('development:mongoose') ;

// debugger setup
mongoose.connect(`${config.get("MONGODB_URI")}/miniBagShop`).then(()=>{
   dbgr('connected') ;
}).catch((err)=>{
   dbgr(err);
})

module.exports = mongoose.connection ;