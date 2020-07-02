const imageUrl2 = require('/dist/img/pizza.jpeg')

const tab = (() => {
    const setTab = () => {
        const content = document.getElementById("content");
        const sectionArea = document.createElement('section');
        const divArea1 = document.createElement('div');
        const divArea2 = document.createElement('div');
        const divArea3 = document.createElement('div');
        const h2Area1 = document.createElement('h2');
        const h2Area2 = document.createElement('h2');
        const h2Area3 = document.createElement('h2');
        const imageArea = new Image();
        imageArea.src = imageUrl2;
        const pArea1 = document.createElement('p');
        const pArea2 = document.createElement('p');
        const pArea3 = document.createElement('p');

        content.appendChild(sectionArea);
        sectionArea.appendChild(divArea1);
        sectionArea.appendChild(divArea2);
        sectionArea.appendChild(divArea3);
        divArea1.appendChild(h2Area1);
        divArea2.appendChild(h2Area2);
        divArea3.appendChild(h2Area3);
        divArea1.appendChild(imageArea);
        divArea1.appendChild(pArea1);
        divArea2.appendChild(pArea2);
        divArea3.appendChild(pArea3);

        imageArea.setAttribute('id', 'pizza');
        divArea1.classList.add('tab-content1');
        divArea2.classList.add('tab-content2');
        divArea3.classList.add('tab-content3');

        h2Area1.innerHTML = "About us";
        h2Area2.innerHTML = "Menu";
        h2Area3.innerHTML = "Contact";
        pArea1.innerHTML = "America’s Most Loved Pizza is the perfect staple for any event, with dough made from scratch, an original sauce recipe, and three signature cheeses. Each large pizza includes eight slices and is ideal for three adults. From birthdays to meetings, any event is easy to love when you have America’s Most Loved Pizza.";
        pArea2.innerHTML = "Coming soon!";
        pArea3.innerHTML = "Call 400-555-5555";

        const menu = document.querySelector('.tab-content2')
        const contact = document.querySelector('.tab-content3')
    
        menu.style.display = "none";
        contact.style.display = "none";
    }

    return { setTab };
})();

export { tab };