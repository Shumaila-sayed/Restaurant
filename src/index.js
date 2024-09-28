import "./styles.css";
import { loadHome } from "./home.js";
import { loadShop } from "./shop.js";
import { loadAbout } from "./about";
import { loadBlog } from "./blog";

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('#content');
    
    const homeBtn = document.querySelector('#home')
    const shopBtn = document.querySelector('#shop');
    const aboutBtn = document.querySelector('#about');
    const blogBtn = document.querySelector('#blog');

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

    blogBtn.addEventListener('click', () => {
        container.innerHTML = "";
        loadBlog();
    } )
    
     loadHome()
})