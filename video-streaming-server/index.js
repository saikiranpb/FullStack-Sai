// var button=document.getElementById(btn)
const screen = document.getElementById("screen");
const playIcon = document.getElementById("play");
const videoColumn = document.getElementById("videoColumn");
const videoCaption=document.getElementById("caption")
const videoDescription=document.getElementById("descr")
url = "http://localhost:8080/video/search";

async function getMovies(url) {
  const disp = await fetch(url, { method: "GET" });
  const dispData = await disp.json();

  console.log(dispData);

  videoList(dispData);

  return dispData;
}
getMovies(url);

function videoList(data) {
  videoColumn.innerHTML = "";
  data.result.forEach((element) => {
    let { videoId,caption, thumbnail } = element;
    const videoElt = document.createElement("div");
    videoElt.innerHTML = `
      <div class="videoCard d-flex flex-row">                            
      <div class="d-flex justify-content img"> <img src="${thumbnail}" alt=""></div>
      <div class=" d-flex justify-content"><button onclick="show(${videoId})" id="link" class="link">${caption}</button></div>
  </div>
      `
    videoColumn.appendChild(videoElt);
  });
}

function play() {
  show(1);
}

function show(id) {
  fetch("http://localhost:8080/video/search", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      data.result.forEach((element) => {
        let {videoId,link,caption,desc}=element
        if (id === videoId) {
          screen.innerHTML = "";         
          screen.innerHTML = `<iframe width="850" id="video" height="475" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          videoCaption.innerHTML='';
          videoCaption.innerHTML=caption;
          videoDescription.innerHTML='';
          videoDescription.innerHTML=desc;

        }
      });
    }
    )
    .catch((e) => e);
}
