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

export {dataNotablesCollections, dataLiveAuctions};