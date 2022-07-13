// var button=document.getElementById(btn)
var screen=document.getElementById("screen")

function show(){
 fetch("http://localhost:8080/video/search",{method:'GET'})
  .then(response => response.json())
  .then(data => {    
    console.log(data.result[1])
    screen.innerHTML=''
    // const  = document.createElement("div");
   screen.innerHTML = `<iframe width="800" id="video" height="450" src="${data.result[1].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    // screen.appendChild(movieElt);
  }
  ).catch(e=>e)
}