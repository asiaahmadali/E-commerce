
const express = require('express') ;
const app = express() ;

const app = require('path') ;
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connection') ;
const userRouter = require('./routes/usersRouter') ;
const ownerRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');


app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser)
app.set('view engine','ejs') ;

app.use('/owners',ownerRouter);
app.use('/products',productsRouter);
app.use('/users',userRouter) ;


app.listen(3000,()=>{
    console.log('server listen')
})