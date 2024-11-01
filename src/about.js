function loadAbout() {
	const container = document.querySelector('#content');

	const aboutSection = document.createElement('div');
	aboutSection.classList.add('aboutPage');

	const image = document.createElement('span');
	image.classList.add('about-banner');

	aboutSection.appendChild(image);

	const details = document.createElement('div');

	const heading = document.createElement('h3');
	heading.innerHTML = 'Foodie, Burgers, and <br>Best Pizzas';
	heading.classList.add('about-heading');

	details.appendChild(heading);

	const para = document.createElement('p');
	para.innerHTML =
		'The restaurants in Hangzhou also catered to many northern Chinese who had <br>fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is <br>also known that many restaurants were run by families.';
	para.classList.add('about-para');

	details.appendChild(para);

	const lists = document.createElement('ul');
	lists.classList.add('about-lists');

	for (let i = 0; i < 4; i++) {
		let list = document.createElement('li');
		list.classList.add('list');

		if (i == 0) {
			list.textContent = 'Delicious & Healthy Foods';
		} else if (i == 1) {
			list.textContent = 'Spacific Family And Kids Zone';
		} else if (i == 2) {
			list.textContent = 'Music & Other Facilities';
		} else if (i == 3) {
			list.textContent = 'Fastest Food Home Delivery';
		}

		lists.appendChild(list);
	}
	details.appendChild(lists);

	const btn = document.createElement('button');
	btn.textContent = 'Order Now';
	btn.classList.add('about-btn');

	details.appendChild(btn);

	aboutSection.appendChild(details);
	container.appendChild(aboutSection);

	return container.innerHTML;
}

export { loadAbout };
