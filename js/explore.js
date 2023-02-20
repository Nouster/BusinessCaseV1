import { dataLiveAuctions } from "./data.js";

let firstSection = document.querySelector("section.exploreSection");
let firstRow = document.createElement("div");
firstRow.className = "row mt-5";
firstSection.appendChild(firstRow);

dataLiveAuctions.forEach((v)=>{
   let vignette1 = document.createElement("div");
   vignette1.className = "col-lg-3";
   firstRow.appendChild(vignette1);

   let picture1 = document.createElement("img");
   picture1.src = `${v.img}`;
   picture1.className = "img-fluid rounded mt-3";
   vignette1.appendChild(picture1);
})

let picturePointer = document.querySelectorAll("img");
picturePointer.forEach((v)=>{
    v.style = "cursor: pointer;"
})



