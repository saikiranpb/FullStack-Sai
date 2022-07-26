const restaurant = require("../models/restaurant");

exports.getRestaurantByCityID=(req,res)=>{

  let filter={ city : req.params.cID}
  restaurant.find(filter)
  .then(result=>{
    console.log(result)
      res.status(200).json({
      message:`Restaurants of city: fetched successfully`,
      data: result
    })
  })
  .catch((error) => {
    res.status(404).json({ message: "error in db" });
  });

}


exports.getRestaurantByName=(req,res)=>{

  let filter={ name : req.params.Name}
  restaurant.find(filter)
  .then(result=>{
    console.log(result)
      res.status(200).json({
      message:`Restaurant fetched successfully`,
      data: result
    })
  })
  .catch((error) => {
    res.status(404).json({ message: "error in db" });
  });

}



