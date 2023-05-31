
//products
let products = [
    {
     id: 1,
     img:"https://i.postimg.cc/B62ymxtw/marvels-spider-man-miles-morales-ps5-playstation-5-1.webp",
     title: "Play 5",
     info:"the is the new ps 5 and it has all new new new brand ft on it for your enjoyment",
     price:"R7800"
    },
    {
    id: 2,
    img:"https://i.postimg.cc/h47YhGhC/xboxback.webp",
    title: "Xbox 1",
    info:"the is the new Xbox and it has all new new new brand ft on it for your enjoyment",
    price:"R7800"
    },
    
    {
    id: 3,
    img:"/Style/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg",
    title: "Play 5",
    info:"the is the new ps 5 and it has all new new new brand ft on it for your enjoyment",
    price:"R7800"
    },
    
    {
    id: 4,
    img:"/Style/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg",
    title: "Play 5",
    info:"the is the new ps 5 and it has all new new new brand ft on it for your enjoyment",
    price:"R7800"
    },
    
    {
    id: 5,
    img:"/Style/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg",
    title: "Play 5",
    info:"the is the new ps 5 and it has all new new new brand ft on it for your enjoyment",
    price:"R7800"
    }

]

// let shop = document.querySelector('.pacman');
// products.forEach((thing)=> {
//     shop.innerHTML += `
//     <div class= "cards-wrapper">
//     <div class= "images">
//     <img scr="${thing.img}" >
//     <h2>${thing.title}</h2>
//     <h6>${thing.info}</h6>
//     </div>
//     <p>${thing.price}</p>
//     </div>
//     `
// })

let shop = document.querySelector(".pacman");
products.forEach((thing)=> {
    shop.innerHTML += `
    <div class="card">
    <img src="${thing.img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${thing.title}</h5>
      <p class="card-text">${thing.info}</p>
      <p>${thing.price}</p>
    </div>
    </div>
    `
 })
   
// home page 
// document.getElementById("intro").innerHTML = "<p>GEN-TECH</p>";
