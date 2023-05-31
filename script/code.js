
//products
let products = [
    {
     id: 1,
     img:"https://i.postimg.cc/DyTfjXkX/ASM2022001-Variant1-Eminem.webp",
     title: "Spider x Eminem",
     info:"A new, extremely limited 'Amazing Spider-Man' #1 variant cover pits Spider-Man against Eminem in a rap battle witnessed by fan-favorite Marvel characters.",
     price:"R550"
    },
    {
    id: 2,
    img:"https://i.postimg.cc/v89Htvjy/captain-america-spiderman.webp",
    title: "Captain America X SpiderMan",
    info:"In this world, Captain America was Spider-Man's main idol and mentor. When Cap joined the Vietnam War, Peter felt guilty, realizing he could use his own powers to help his country as well.",
    price:"R390"
    },
    
    {
    id: 3,
    img:"https://i.postimg.cc/pT5V7QLD/spiderman-1.jpg",
    title: " Spider-man #1 Edition",
    info:"The FIRST issue of Amazing Spider-Man! (1963)",
    price:"R1000"
    },
    
    {
    id: 4,
    img:"https://i.postimg.cc/L5z94Hf5/spiderman-2.jpg",
    title: "Spider-man #2",
    info:"this issue features the first diagram detailing how Spider-Man's web-shooters operate",
    price:"R800"
    },
    
    {
    id: 5,
    img:"https://i.postimg.cc/j2VqrWDB/zombie-Spider.jpg",
    title: " Zombie Spider-man",
    info:"Peter Benjamin Parker (of Earth-2149) is an alternate version of Spider-Man that was turned into a zombie.",
    price:"R780"
    }

]

let shop = document.querySelector(".pacman");
products.forEach((thing)=> {
    shop.innerHTML += `
    <div class="card">
    <img src="${thing.img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${thing.title}</h5>
      <p class="card-text">${thing.info}</p>
    </div>
    <p>${thing.price}</p>

    </div>
    `
 })
   
// home page 
// document.querySelector("#intro").innerHTML = "Gen"
