const restaurant=require('../Models/Restaurants.json')

exports.getRestaurantList=(req,res)=>{
    let RestaurantList= restaurant.filter(item=> item.city_name.toLowerCase()==req.params.Cname.toLowerCase())
    res.status(200).json({
        message:`Restaurants of city: ${RestaurantList[0].city} - fetched successfully`,
        data: RestaurantList
    })
}