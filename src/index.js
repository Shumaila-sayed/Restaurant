import "./styles.css";
import { loadHome } from "./home.js";
import { loadShop } from "./shop.js";
import { loadAbout } from "./about";

console.log(1);




document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('#content');
    
    const homeBtn = document.querySelector('#home')
    const shopBtn = document.querySelector('#shop');
    const aboutBtn = document.querySelector('#about');

    homeBtn.addEventListener('click', () => {
        container.innerHTML = "";
        loadHome();
    })

    shopBtn.addEventListener('click', () => {
        container.innerHTML = "";
        loadShop();
    })

    aboutBtn.addEventListener('click', () => {
        container.innerHTML = "";
        loadAbout();
    } )

    loadHome()
})


