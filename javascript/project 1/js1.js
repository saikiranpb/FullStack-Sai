function reverseString(str){
    let character = "";
    for(let i = 0 ; i < str.length ; i++ ){
    character = str[i] + character;
    console.log(character)
    }
    console.log(character);
    }

    reverseString("SaiKiran");



    //insert character into a string

    function insert(dob){
        var dob=document.getElementById("dob").value
        var dobs
        var dd,mm,yy;
        dd=dob.slice(0,2);
        mm= dob.slice(2,4);
        yy=dob.slice(4,8);
        dobs=yy+ "-" + mm + "-" + dd;
        document.getElementById("output").innerHTML=dobs;
    }
//   var dob=window.prompt("Enter your dob in ddmmyyy");

var input = document.getElementById("dob");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button1").click();
    }
});

// $("dob").keyup(function(event) {
//     if (event.keyCode === 13) {
//         $("button1").click();
//     }
// });

var a=["Cap","Thor","Loki","Hawkeye","Hulk"]
// a.splice(1,2,"Tony","Nat")
a.sort()
console.log(a)


var b=[2,3,5,9,89,97,7,4,2,6,9,7,12,5,7,8,9,9058,56,632,36,98]
console.log(b)
function even(temp){
    if(temp%2==0)
    return temp
}
console.log("even array : ",b.filter(even))