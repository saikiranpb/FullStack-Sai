const express=require('express')
const bodyParser=require('body-parser')
const restaurantRoutes=require('./routes/restaurant')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/dbSai',()=>{console.log(`successfully connected to database`)})

const app=express();
const PORT=8080;



app.use(bodyParser.json())
app.use('/restaurant',restaurantRoutes)


app.listen(PORT,()=>{
    console.log(`PORT ${PORT} is running successfully`)
})