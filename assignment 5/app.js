const express=require('express');
const bodyParser=require('body-parser');
const route=require('./Routes/routes')
const mongoose=require('mongoose')
const PORT=8090;

mongoose.connect("mongodb://localhost:27017/dbSai",
()=>{
    console.log("MongoDB connected")
},
e=>console.log(e))


const app=express();

app.use(bodyParser.json())
app.use('',route)

app.listen(PORT, 'localhost', ()=>console.log(`Server is running on http://localhost:${PORT}`));
