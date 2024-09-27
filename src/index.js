import "./styles.css";
import { loadHome } from "./home.js";
import { loadShop } from "./shop.js";


loadHome();
console.log(1);




const shopBtn = document.querySelector('#shop');

let container = document.querySelector('#content');

shopBtn.addEventListener('click', () => {
    container.innerHTML = " ";
    container = loadShop();
})