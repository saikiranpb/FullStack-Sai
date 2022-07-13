let ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

//a.

const uniqueRestaurants = Array.from( new Set( ratingData.map((x) => x.restaurant)));

function avg(rName) {
  var sum = 0,num = 0;
  ratingData.forEach((value) => {
    if (value.restaurant === rName) {
      sum += value.rating;
      ++num;
    }
  });
  var avg = sum / num;
  let obj = {
    restaurant: rName,
    averageRating: avg,
  };
  return obj;
}
function iterate(arrayUniq) {
  const arr = [];
  arrayUniq.forEach((element) => {
    obj = avg(element);
    arr.push(obj);
  });
  return arr;
}
const output1 = iterate(uniqueRestaurants);
console.log(output1);

//b.
const output2 = output1.filter(x => x.averageRating >= 4);
console.log(output2);
