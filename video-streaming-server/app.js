const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const video=require('./routes/route')
const cors = require('cors');

mongoose.connect('mongodb://localhost/dbSai',()=>{console.log(`successfully connected to database`)})
const app=express();
const PORT=8080;
app.use(cors())
app.use('/video',video)
app.use(bodyParser.json())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.listen(PORT,()=>{
    console.log(`PORT ${PORT} is running successfully`)
})