function loadShop() {
    const container = document.querySelector('#content');

    const shop = document.createElement('div');
    shop.classList.add("shop");

    const shopDetails = document.createElement('div');
    shopDetails.classList.add('shop-details');

    const para1 = document.createElement('p');
    para1.textContent = 'Popular Dishes';
    para1.classList.add('shop-para');

    shopDetails.appendChild(para1);

    const heading = document.createElement('h2');
    heading.textContent = 'Our Delicious';
    heading.classList.add('shop-heading');

    shopDetails.appendChild(heading);

    const para2 = document.createElement('p')
    para2.innerHTML = 'Food is any substance consumed to provide nutritional <br>support for an organism.';
    para2.classList.add('shop-sub-para');

    shopDetails.appendChild(para2);

    // div for the tabs
    const tab = document.createElement('div');
    tab.classList.add('tabs');

    for(let i = 0; i < 5; i++) {
        let btn = document.createElement('button');
        if(i == 0){
            btn.textContent = 'All'
        } else if (i == 1) {
            btn.textContent = 'Pizza'
        } else if (i == 2) {
            btn.textContent = 'Burger'
        } else if (i == 3) {
            btn.textContent = 'Drinks'
        } else if (i == 4) {
            btn.textContent = 'Sandwich'
        }

        tab.appendChild(btn);
    }
    shopDetails.appendChild(tab);
    shop.appendChild(shopDetails);

    // menu cards section
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // each card   

    for(let i = 0; i < 6; i++) {
       let card = document.createElement('div');
       card.classList.add('card');

       let image = document.createElement('span');
        if(i == 0){
            image.classList.add('fried-chicken-img');
        } else if(i == 1) {
            image.classList.add('burger-king-img');
        } else if(i == 2) {
            image.classList.add('pizza-img');
        } else if(i == 3) {
            image.classList.add('burrito-img');
        } else if(i == 4) {
            image.classList.add('bbq-img');
        } else if(i == 5) {
            image.classList.add('wendy-img');
        }
       
       card.appendChild(image);

       const name = document.createElement('p')
       if(i == 0){
         name.textContent = 'Fried Chicken Unlimited'
        } else if(i == 1) {
            name.textContent = 'Burger King Whopper'
        } else if(i == 2) {
            name.textContent = 'White Castle Pizzas'
        } else if(i == 3) {
            name.textContent = 'Bell Burrito Supreme'
        } else if(i == 4) {
            name.textContent = 'Kung Pao Chicken BBQ'
        } else if(i == 5) {
            name.textContent = "Wendy's Chicken"
        }

       name.classList.add('dish-name')
       card.appendChild(name);

       const price = document.createElement('p');
       price.textContent = 'PRICE:';
       price.classList.add('price');

       if(i == 0){
        price.classList.add('fried-chicken');
        } else if(i == 1) {
            price.classList.add('burger-king');
        } else if(i == 2) {
            price.classList.add('pizza');
        } else if(i == 3) {
            price.classList.add('burrito');
        } else if(i == 4) {
            price.classList.add('bbq');
        } else if(i == 5) {
            price.classList.add('wendy');
        }
   
       card.appendChild(price);
       menu.appendChild(card); 
    };

    shop.appendChild(menu);
    container.appendChild(shop);
};

export { loadShop }