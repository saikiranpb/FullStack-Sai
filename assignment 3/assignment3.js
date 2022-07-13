 //1. restaurantManager class creation
 class restaurantManager{
    restaurantList=[
        {   
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ];

    printAllRestaurantNames(){ //method to print all restaurant names
        var rest=[];  
        var i;
        for(i in this.restaurantList){
        rest[i]=(this.restaurantList[i].restaurantName)
        // console.log(this.restaurantList[i].restaurantName)
        }
        return rest;
    }

    filterRestaurantByCity(city){ //method to filter restaurant based on city
        var j=0;
        function restFilter(restaurantList){
        return restaurantList.city==city
        }
    
        return this.restaurantList.filter(restFilter);
        }
}

//new object creation
const a= new restaurantManager();

//method calls

console.log(a.printAllRestaurantNames());
console.log(a.filterRestaurantByCity("Delhi"));


//2. Orders for Punjabi Tadka Restaurant

orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};


//a
function CalculateTotal(orderData){
    var total=0
    var i=0
    for(i in orderData){
        total+=orderData[i];
    }
    return total
}
totalOrders=CalculateTotal(orderData)
console.log("Total number of orders placed =",totalOrders)


//b
function CountKeys(orderData){
    var total=0;
    var i=0
    for(i in orderData){
        total++
    }
    return total
}

console.log("Total number of orders proportions=",CountKeys(orderData))

//c
let arr=[];
function percentageOfProportions(){
    var total=totalOrders; 
    var j=0;
    for(var i in orderData){
       const arrayObj=
        {
            'id':j+1,
            'order':i,
            'order percentage' : ((orderData[i]/total)*100).toFixed(2),
            'restaurant':"Punjabi Tadka"
    
        } 
        j++
        arr.push(arrayObj)      
    }
    return arr;
}
console.log(percentageOfProportions(orderData));
