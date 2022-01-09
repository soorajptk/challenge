require('dotenv').config()
const express=require('express');
const path=require('path')
const app=express()
//connectDB
const connectDB=require('./db/connectDB')
//email route
const emailRouter=require('./routes/email')
//cors 
const cors=require('cors')

app.set('views','./views'); 
app.set('view engine','ejs'); 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'/public')))

app.get('/',(req,res)=>{

    res.render('index',{});
    
});
app.use('/home',emailRouter)

let port=process.env.PORT || 3000;

const start=async()=>{
try {
    await connectDB(process.env.MONGO_URI)
app.listen(port,()=>{console.log(`server running on ${port}port`)})   
} catch (error) {
 console.log(error)   
}
}

start()