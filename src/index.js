import "./styles.css";
// import { loadHome } from "./home.js";
// import { loadShop } from "./shop.js";

console.log(1);




document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('#content');
    
    const homeBtn = document.querySelector('#home')
    const shopBtn = document.querySelector('#shop');

    homeBtn.addEventListener('click', () => {
        container.innerHTML = "";
        loadHome();
    })

    shopBtn.addEventListener('click', () => {
        container.innerHTML = "";
        loadShop();
    })

    loadHome()
})


