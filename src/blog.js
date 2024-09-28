function loadBlog() {
    const container = document.querySelector('#content');

    const blogSection = document.createElement('div');
    blogSection.classList.add('blogSection');

    const blogDetails = document.createElement('div');
    blogDetails.classList.add('blog-details');

    const para1 = document.createElement('p');
    para1.textContent = 'Latest Blog Posts';
    para1.classList.add('blog-para');

    blogDetails.appendChild(para1);

    const heading = document.createElement('h2');
    heading.textContent = "This Is All About";
    heading.classList.add('blog-heading');

    blogDetails.appendChild(heading);

    const para2 = document.createElement('p');
    para2.innerHTML = 'Food is any substance consumed to provide nutritional <br>support for an organism.';
    para2.classList.add('blog-sub-para');

    blogDetails.appendChild(para2);

    blogSection.appendChild(blogDetails);

    const blogs = document.createElement('div');
    blogs.classList.add('blogs');

    for(let i = 0; i < 3; i++) {
        const card = document.createElement('div');
        card.classList.add('blog-card');

        const image = document.createElement('span');
        if(i == 0) {
            image.classList.add('blog-pizza');
        } else if (i == 1) {
            image.classList.add('blog-burger');
        } else if(i == 2) {
            image.classList.add('blog-chicken');
        }

        card.appendChild(image);

        const title = document.createElement('h4');
        if(i == 0) {
            title.textContent = "What Do You Think About Cheese Pizza Recipes?";
        } else if (i == 1) {
            title.textContent = "Making Chicken Strips With New Delicious Ingridents.";
        } else if(i == 2) {
            title.textContent = "Innovative Hot Chessyraw Pasta Make Creator Fact.";
        }
        title.classList.add('blog-title');

        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = "Financial experts support or help you to to find out which way you can raise your funds more...";
        description.classList.add('blog-description');

        card.appendChild(description);

        const read = document.createElement('p');
        read.textContent = "READ MORE"
        read.classList.add('read');

        card.appendChild(read);
        blogs.appendChild(card);
    }
        blogSection.appendChild(blogs);
        container.appendChild(blogSection);

        return container.innerHTML;
}

export { loadBlog }