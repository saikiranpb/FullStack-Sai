const restaurant = require("../models/restaurant");

//Problem 1
exports.getRestaurant = (req, res) => {
  let temp = {};

  if (req.body.city_id) {
    temp.city_id = req.body.city_id;
  }

  if (req.body.cuisine && req.body.cuisine.length > 0) {
    temp["Cuisine.name"] = { $in: req.body.cuisine };
  }

  if (req.body.lcost && req.body.hcost) {
    if (req.body.lcost == 0) {
      temp.cost = { $lte: req.body.hcost };
    } else {
      temp.cost = {
        $lt: req.body.hcost,
        $gt: req.body.lcost,
      };
    }
  }
  let sort = 1;
  if (req.body.sort) {
    sort = req.body.sort;
  }
  restaurant.find(temp).limit(2).skip(2 *(req.params.pageNo - 1)).sort({ cost: sort })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Restaurant fetched",
        data: result,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: "error in db" });
    });
};

//Problem 2
exports.getRestDetails=(req,res)=>{
    let temp = {};

    if (req.body.name) {
        temp.name = req.body.name;
      }
    
    restaurant.find(temp)
    .then(result=>{
        res.status(200).json({
            message: `Details for the restaurant ${result[0].name}`,
            data: result
        })
    })
    .catch((error) => {
      res.status(404).json({ message: "error in db" });
    });
}
