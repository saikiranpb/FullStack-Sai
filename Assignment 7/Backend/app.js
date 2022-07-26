const express=require('express')
const bodyParser=require('body-parser')
const restaurantRoutes=require('./routes/restaurant')
const mealTypeRoutes=require('./routes/mealTypes.js')
const locationRoutes=require('./routes/location')
const cors=require('cors')


const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/dbSai',()=>{console.log(`successfully connected to database`)})

const app=express();
const PORT=8080;


app.use(cors())
app.use(bodyParser.json())
app.use('/restaurant',restaurantRoutes)
app.use('/mealTypes',mealTypeRoutes)
app.use('/location',locationRoutes)

app.listen(PORT,()=>{
    console.log(`PORT ${PORT} is running successfully`)
})