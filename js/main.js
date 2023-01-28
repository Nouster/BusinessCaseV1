let liveAuctions = document.querySelector("section.liveAuctions");
let dataLiveAuctions = [
    {img: "../img/nftMondrian.png", title: "Mondrian arch", descritpion: "This is simply a memory from the past.", price: 2.87, icon: "../img/iconEth.png", author: "Daniel White", collection: "Mondrian Flow 2.0", offer: 0.3}
];


dataLiveAuctions.forEach((v)=>{

    let container = document.createElement("div");
    container.className = "liveAuctionsContainer";
    liveAuctions.appendChild(container);
    let ticket = document.createElement("div");
    ticket.className = "description";
    container.appendChild(ticket);
    let picture = document.createElement("img");
    picture.src = `${v.img}`;
    picture.className = "img-fluid rounded";
    ticket.appendChild(picture);
    let ticketTitle = document.createElement("h3");
    ticketTitle.innerHTML = `${v.title}`
    ticketTitle.className = "my-3";
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

