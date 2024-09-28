function loadHome() {
   const container = document.querySelector('#content');

   const home = document.createElement('div');
   home.classList.add('hero'); 

   const para1 = document.createElement('p');
   para1.textContent = "Eat Sleep And"
   para1.classList.add('hero-para');

   home.appendChild(para1);

   const heading = document.createElement('h1');
   heading.innerHTML = "Supper delicious <br>Burger in town!"
   heading.classList.add('hero-heading');

   home.appendChild(heading);

   const para2 = document.createElement('p');
   para2.innerHTML = "Food is any substance consumed to provide nutritional <br>support for an organism."
   para2.classList.add('hero-sub-para');
   
   home.appendChild(para2);

   const btn = document.createElement('button');
   btn.textContent = "Book a Table"
   btn.classList.add('hero-btn');

   home.appendChild(btn);
   container.appendChild(home);

   return container.innerHTML;
}

export { loadHome }