let liveAuctions = document.querySelector("section.liveAuctions");

let dataLiveAuctions = [
    {img: "../img/nftMondrian.png", title: "Mondrian arch", descritpion: "This is simply a memory from the past. Rainbow mondrian.", price: (Math.random()*10).toFixed(3)  , icon: "../img/iconEth.png", author: "Etik@", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/marylin.gif", title: "Monroe motion", descritpion: "A GIF is worth a book worth of words and art is worth an entire library.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Dall-E", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftGoldQueen.png", title: "Id3entity", descritpion: "Gold Queen : A Journey of Self-Discovery between lands.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftOutOfTheBlue.png", title: "Out of the blue", descritpion: "Hands / remember / fingers / Polished surface.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Nayima-x01", collection: "Han-Han", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/fortior.png", title: "Ram-says", descritpion: "Skeleton. Designed using some creative input from Danil Pan.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "P-BOK", collection: "P-BOK", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/Efflrescence.gif", title: "EfflØrescence", descritpion: "This is simply a memory from the past.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "E@gle", collection: "EfflØrescence", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftMondrian.png", title: "Mondrian arch", descritpion: "This is simply a memory from the past. Rainbow mondrian.", price: (Math.random()*10).toFixed(3)  , icon: "../img/iconEth.png", author: "Etik@", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/marylin.gif", title: "Monroe motion", descritpion: "A GIF is worth a book worth of words and art is worth an entire library.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Dall-E", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftGoldQueen.png", title: "Id3entity", descritpion: "Gold Queen : A Journey of Self-Discovery between lands.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/nftOutOfTheBlue.png", title: "Out of the blue", descritpion: "Hands / remember / fingers / Polished surface.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "Nayima-x01", collection: "Han-Han", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/fortior.png", title: "Ram-says", descritpion: "Skeleton. Designed using some creative input from Danil Pan.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "P-BOK", collection: "P-BOK", offer: (Math.random()*10).toFixed(3)},
    {img: "../img/Efflrescence.gif", title: "EfflØrescence", descritpion: "This is simply a memory from the past.", price: (Math.random()*10).toFixed(3), icon: "../img/iconEth.png", author: "E@gle", collection: "EfflØrescence", offer: (Math.random()*10).toFixed(3)}
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
    ticketDescription.innerHTML = `${v.descritpion}`;
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

