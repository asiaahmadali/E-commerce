
const express = require('express') ;
const app = express() ;

const app = require('path') ;
const cookieParser = require('cookie-parser');


app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser)
app.set('view engine','ejs') ;


app.get('/',(req,res)=>{
   res.send('ookkk') ;
})

app,listen(3000,()=>{
    console.log('server listen')
})