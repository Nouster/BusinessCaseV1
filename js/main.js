let liveAuctions = document.querySelector("section.liveAuctions");

// const promise01 = fetch('https://jsonplaceholder.typicode.com/todos/1');
// promise01.then((response) => {
//     console.log(response)
// })






let dataLiveAuctions = [
    {img: "../img/nftMondrian.png", title: "Mondrian arch", description: "This is simply a memory from the past. Rainbow mondrian.", price: (Math.random()*10).toFixed(3)  , icon: "../img/iconEth.png", author: "Etik@", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/marylin.gif", title: "Monroe motion", description: "A GIF is worth a book worth of words and art is worth an entire library.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Dall-E", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftGoldQueen.png", title: "Id3entity", description: "Gold Queen : A Journey of Self-Discovery between lands.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftOutOfTheBlue.png", title: "Out of the blue", description: "Hands / remember / fingers / Polished surface.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Nayima-x01", collection: "Han-Han", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/fortior.png", title: "Ram-says", description: "Skeleton. Designed using some creative input from Danil Pan.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "P-BOK", collection: "P-BOK", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/Efflrescence.gif", title: "EfflØrescence", description: "This is simply a memory from the past.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "E@gle", collection: "EfflØrescence", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftMondrian.png", title: "Mondrian arch", description: "This is simply a memory from the past. Rainbow mondrian.", price: (Math.random()*10).toFixed(3)  , icon: "../img/iconEth.png", author: "Etik@", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/marylin.gif", title: "Monroe motion", description: "A GIF is worth a book worth of words and art is worth an entire library.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Dall-E", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftGoldQueen.png", title: "Id3entity", description: "Gold Queen : A Journey of Self-Discovery between lands.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftOutOfTheBlue.png", title: "Out of the blue", description: "Hands / remember / fingers / Polished surface.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Nayima-x01", collection: "Han-Han", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/fortior.png", title: "Ram-says", description: "Skeleton. Designed using some creative input from Danil Pan.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "P-BOK", collection: "P-BOK", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/Efflrescence.gif", title: "EfflØrescence", description: "This is simply a memory from the past.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "E@gle", collection: "EfflØrescence", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftMondrian.png", title: "Mondrian arch", description: "This is simply a memory from the past. Rainbow mondrian.", price: (Math.random()*10).toFixed(3)  , icon: "../img/iconEth.png", author: "Etik@", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/marylin.gif", title: "Monroe motion", description: "A GIF is worth a book worth of words and art is worth an entire library.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Dall-E", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftGoldQueen.png", title: "Id3entity", description: "Gold Queen : A Journey of Self-Discovery between lands.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftOutOfTheBlue.png", title: "Out of the blue", description: "Hands / remember / fingers / Polished surface.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Nayima-x01", collection: "Han-Han", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/fortior.png", title: "Ram-says", description: "Skeleton. Designed using some creative input from Danil Pan.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "P-BOK", collection: "P-BOK", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/Efflrescence.gif", title: "EfflØrescence", description: "This is simply a memory from the past.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "E@gle", collection: "EfflØrescence", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftMondrian.png", title: "Mondrian arch", description: "This is simply a memory from the past. Rainbow mondrian.", price: (Math.random()*10).toFixed(3)  , icon: "../img/iconEth.png", author: "Etik@", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/marylin.gif", title: "Monroe motion", description: "A GIF is worth a book worth of words and art is worth an entire library.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Dall-E", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftGoldQueen.png", title: "Id3entity", description: "Gold Queen : A Journey of Self-Discovery between lands.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftOutOfTheBlue.png", title: "Out of the blue", description: "Hands / remember / fingers / Polished surface.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Nayima-x01", collection: "Han-Han", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/fortior.png", title: "Ram-says", description: "Skeleton. Designed using some creative input from Danil Pan.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "P-BOK", collection: "P-BOK", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/Efflrescence.gif", title: "EfflØrescence", description: "This is simply a memory from the past.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "E@gle", collection: "EfflØrescence", offer: (Math.random()*10).toFixed(3)}
];


let container = document.createElement("div");
container.className = "liveAuctionsContainer";
liveAuctions.appendChild(container);

dataLiveAuctions.forEach((v)=>{
    let ticket = document.createElement("div");
    ticket.className = "description";
    container.appendChild(ticket);
    let picture = document.createElement("img");
    picture.src = `${v.img}`;
    picture.className = "img-fluid rounded";
    ticket.appendChild(picture);
    let ticketTitle = document.createElement("h3");
    ticketTitle.innerHTML = `${v.title}`
    ticketTitle.className = "my-3 text-capitalize";
    ticket.appendChild(ticketTitle);

    let ticketDescription = document.createElement("p");
    ticketDescription.innerHTML = `${v.description}`;
    ticket.appendChild(ticketDescription);

    let ticketPrice = document.createElement("span");
    ticketPrice.innerHTML = `<img src="${v.icon}"> ${v.price} ETH`;
    ticketPrice.className = "price";
    ticket.appendChild(ticketPrice);

    let authorTicket = document.createElement("div");
    authorTicket.className = "author";
    ticket.appendChild(authorTicket);

    let authorInformation1 = document.createElement("span");
    authorInformation1.innerHTML = `<strong>Artist : </strong> ${v.author}`;
    authorTicket.appendChild(authorInformation1);

    let authorInformation2 = document.createElement("span");
    authorInformation2.innerHTML = `<strong>Collection : </strong> ${v.collection}`;
    authorTicket.appendChild(authorInformation2);

    let offerInformation = document.createElement("div");
    offerInformation.className = "offer";
    ticket.appendChild(offerInformation);

    let currentOffer = document.createElement("span");
    currentOffer.innerHTML = `<strong>Offert : </strong><img src="${v.icon}">  ${v.offer}`;
    offerInformation.appendChild(currentOffer);
})

let liveAuctionPicture = document.querySelectorAll("div.description img:nth-child(1)");

liveAuctionPicture.forEach((v) => {
    v.onmouseover = () => {
        v.style = "transform: scale(1.05); cursor: pointer; transition-duration: 0.5s;";
        v.className = "img-fluid rounded"
        v.classList.add("scaled", "transition-duration");
    };
    v.onmouseout = () => {
        v.style = "";
    };
});





let dataNotablesCollections = [
    {
        userIcon :"../img/userIconMondrian.gif", title: "The color of dune concept", nftNumber: Math.floor((Math.random()*15)), userName: "@Ethik_Design", img1: "../img/dune1.png", img2:"../img/dune2.png", img3: "../img/dune3.png", price: (Math.random()*10).toFixed(3), currentBid: (Math.random()*10).toFixed(3), endOn: "", customBackground: "../img/duneBlur.png", overlayTitleNft1 : "#1 Hot Sand", overlayTitleNft2: "#2 Cold Sand", overlayTitleNft3: "#3 Hot & Cold"
    },
    {
        userIcon :"../img/Efflrescence.gif", title: "SpVrKlE", nftNumber: Math.floor((Math.random()*15)), userName: "@Valter_Vhite", img1: "../img/sparkle1.png", img2:"../img/sparkle2.png", img3: "../img/sparkle4.png", price: (Math.random()*10).toFixed(3), currentBid: (Math.random()*10).toFixed(3), endOn: "",  customBackground: "../img/sparkleBlur.png",overlayTitleNft1 : "#1 Hot Sand", overlayTitleNft2: "#2 Cold Sand", overlayTitleNft3: "#3 Hot & Cold"
    },
    {
        userIcon :"../img/nftGoldQueen.png", title: "Oddity", nftNumber: Math.floor((Math.random()*15)), userName: "@Lola_Kola", img1: "../img/sky1.png", img2:"../img/sky4.jpeg", img3: "../img/sky3.png", price: (Math.random()*10).toFixed(3), currentBid: (Math.random()*10).toFixed(3), endOn: "",  customBackground: "../img/skyBlur.png", overlayTitleNft1 : "#1 Hot Sand", overlayTitleNft2: "#2 Cold Sand", overlayTitleNft3: "#3 Hot & Cold"
    },
    {
        userIcon :"../img/nftGenesis.png", title: "Mondrian Concept", nftNumber: Math.floor((Math.random()*15)), userName: "@Jey_Jey_Nayja", img1: "../img/mondrian5.png", img2:"../img/mondrian4.png", img3: "../img/nftMondrian.png", price: (Math.random()*10).toFixed(3), currentBid: (Math.random()*10).toFixed(3), endOn: "",  customBackground: "../img/mondrianBlur.png", overlayTitleNft1 : "#1 Hot Sand", overlayTitleNft2: "#2 Cold Sand", overlayTitleNft3: "#3 Hot & Cold"
    }
];





let containerCollection = document.querySelector("section.notableCollections");

dataNotablesCollections.forEach((v)=>{
    let myRow = document.createElement("div");
    myRow.className ="row bg-primary py-5 px-5 rounded-3 align-items-center customBackground mt-5";
    myRow.style =  `background-image: url(${v.customBackground})`
    containerCollection.appendChild(myRow);

    let collectionInformation = document.createElement("div");
    collectionInformation.className = "d-flex flex-column";
    myRow.appendChild(collectionInformation);

    let titleCollection = document.createElement("div");
    titleCollection.className = "d-flex align-items-center px-5";
    collectionInformation.appendChild(titleCollection);
    let userIcon1 = document.createElement("img");
    userIcon1.className = "userIconMondrian";
    userIcon1.src = `${v.userIcon}`;
    titleCollection.appendChild(userIcon1);

    let h3 = document.createElement("h3");
    h3.innerHTML = `<a class="text-light text-decoration-none" href="">${v.title}</a>`;
    h3.className = "text-light px-2 text-capitalize";
    titleCollection.appendChild(h3);

    let collectionInformation1 = document.createElement("div");
    collectionInformation1.className = "d-flex justify-content-between text-light";
    collectionInformation.appendChild(collectionInformation1);

    let nftNumber = document.createElement("span");
    nftNumber.className = "px-5 py-3";
    nftNumber.innerHTML = `${v.nftNumber} NFT's`;
    collectionInformation1.appendChild(nftNumber);

    let userLink = document.createElement("a");
    userLink.className = "text-light text-decoration-none";
    collectionInformation1.appendChild(userLink);

    let spanLink = document.createElement("span");
    spanLink.className = "px-5 py-1";
    spanLink.innerHTML = `<img class ="userIconMondrian rounded-circle" src="${v.userIcon}" alt="User Icon"> ${v.userName}`;
    userLink.appendChild(spanLink);

    let vignette1 = document.createElement("div");
    vignette1.className = "col-lg-4 px-5 my-4 overInfo";
    myRow.appendChild(vignette1);

    let picture1 = document.createElement("img");
    picture1.className = "img-fluid rounded-top blured nft";
    picture1.src = `${v.img1}`;
    vignette1.appendChild(picture1);

   let bottomInformation1 = document.createElement("div");
   bottomInformation1.className = "bg-light px-2 pt-2 mb-2 pb-5 rounded-bottom";
   vignette1.appendChild(bottomInformation1);

   let spanName1 = document.createElement("a");
   spanName1.className = "pt-2 fw-light fs-6 text-decoration-none text-black";
   spanName1.setAttribute("href","");
   spanName1.innerHTML = `${v.userName}`;
   bottomInformation1.appendChild(spanName1);

   let valueInformation1 = document.createElement("div");
   valueInformation1.className = "d-flex pt-5 justify-content-between";
   bottomInformation1.appendChild(valueInformation1);

   let bid1 = document.createElement("span");
   bid1.innerHTML = `Current Bid : ${v.currentBid}`;
   valueInformation1.appendChild(bid1);

   let counter1 = document.createElement("span");
   counter1.innerHTML = `Ends On :`;
   valueInformation1.appendChild(counter1);

   let vignette2 = document.createElement("div");
   vignette2.className = "col-lg-4 px-5 my-4 overInfo";
   myRow.appendChild(vignette2);

   let picture2 = document.createElement("img");
   picture2.className = "img-fluid rounded-top blured nft";
   picture2.src = `${v.img2}`;
   vignette2.appendChild(picture2);

   let bottomInformation2 = document.createElement("div");
   bottomInformation2.className = "bg-light px-2 pt-2 mb-2 pb-5 rounded-bottom";
   vignette2.appendChild(bottomInformation2);
   
   let spanName2 = document.createElement("a");
   spanName2.className = "pt-2 fw-light fs-6 text-decoration-none text-black";
   spanName2.setAttribute("href","");
   spanName2.innerHTML = `${v.userName}`;
   bottomInformation2.appendChild(spanName2);
   
   let valueInformation2 = document.createElement("div");
   valueInformation2.className = "d-flex pt-5 justify-content-between";
   bottomInformation2.appendChild(valueInformation2);

   let bid2 = document.createElement("span");
   bid2.innerHTML = `Current Bid : ${v.currentBid}`;
   valueInformation2.appendChild(bid2);

   let counter2 = document.createElement("span");
   counter2.innerHTML = `Ends On :`;
   valueInformation2.appendChild(counter2);

   let vignette3 = document.createElement("div");
   vignette3.className = "col-lg-4 px-5 my-4 overInfo";
   myRow.appendChild(vignette3);

   let picture3 = document.createElement("img");
   picture3.className = "img-fluid rounded-top blured nft";
   picture3.src = `${v.img3}`;
   vignette3.appendChild(picture3);

   let bottomInformation3 = document.createElement("div");
   bottomInformation3.className = "bg-light px-2 pt-2 mb-2 pb-5 rounded-bottom";
   vignette3.appendChild(bottomInformation3);

   let spanName3 = document.createElement("a");
   spanName3.className = "pt-2 fw-light fs-6 text-decoration-none text-black";
   spanName3.setAttribute("href","");
   spanName3.innerHTML = `${v.userName}`;
   bottomInformation3.appendChild(spanName3);

   let valueInformation3 = document.createElement("div");
   valueInformation3.className = "d-flex pt-5 justify-content-between";
   bottomInformation3.appendChild(valueInformation3);

   let bid3 = document.createElement("span");
   bid3.innerHTML = `Current Bid : ${v.currentBid}`;
   valueInformation3.appendChild(bid3);

   let counter3 = document.createElement("span");
   counter3.innerHTML = `Ends On :`;
   valueInformation3.appendChild(counter3);
})



let nftPictures = document.querySelectorAll("div.overInfo");
nftPictures.forEach((v, index)=>{
    let textOverlay;

    v.onmouseover = ()=>{
           
            textOverlay = document.createElement("span");
            textOverlay.innerHTML = dataNotablesCollections[index].overlayTitleNft1;
            textOverlay.style = "position: absolute; top: 150px; left: 150px; font-size: 1.4rem; color: white; z-index: 1;";
            v.style = "position: relative; cursor: pointer;";
            v.appendChild(textOverlay);

        };

    v.onmouseout =()=>{
        if(textOverlay){
            v.removeChild(textOverlay);
            textOverlay = null;
        }
    }
});




let app = document.getElementById('app');


let customNodeCreator = function(character) {
  return document.createTextNode(character);
}

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

typewriter
  .typeString('Stay <span class= "bg-dark px-3 py-1 text-white rounded">Updated</span>')
  .pauseFor(100)
  .start();

typewriter.typeString(' And')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Get In <span class = "bg-dark px-3 py-1 text-white rounded">The Loop </span>')
    .pauseFor(2000)
    .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .start();



// let nftPicture = document.querySelectorAll("div.test");
// nftPicture.forEach((v)=>{
//     v.onmouseover = ()=>{
//         let textOverlay = document.createElement("span");
//         textOverlay.innerHTML = "Mon texte";
//         textOverlay.style = "position: absolute; top: 150px; left: 150px; font-size: 1.2rem; color: white; z-index: 1;";
//         v.style = "position: relative;";
//         v.appendChild(textOverlay);
//     };
//     v.onmouseout =()=>{
//         let textOverlay = v.querySelector("span");
//         v.removeChild(textOverlay);
//     }
// });





// let counterValue = "8:00:00";

// function updateCounter() {
// let timeArray = counterValue.split(":");
// let hour = parseInt(timeArray[0]);
// let minute = parseInt(timeArray[1]);
// let second = parseInt(timeArray[2]);

// second++;
// if (second >= 60) {
// second = 0;
// minute++;
// }
// if (minute >= 60) {
// minute = 0;
// hour++;
// }

// let formattedHour = (hour < 10) ? "0" + hour : hour;
// let formattedMinute = (minute < 10) ? "0" + minute : minute;
// let formattedSecond = (second < 10) ? "0" + second : second;

// counterValue = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
// counter.innerHTML = `Ends On : ${counterValue}`;
// }

// setInterval(updateCounter, 1000);


