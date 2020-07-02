const nav = (() => {
    const setNav = () => {
        const content = document.getElementById("content");
        const imageArea = new Image();
        imageArea.src = '/dist/img/logo.png';
        const navArea = document.createElement('nav');
        const ulArea = document.createElement('ul');
        const liArea1 = document.createElement('li');
        const liArea2 = document.createElement('li');
        const liArea3 = document.createElement('li');

        content.appendChild(imageArea);
        content.appendChild(navArea);
        navArea.appendChild(ulArea);
        ulArea.appendChild(liArea1);
        ulArea.appendChild(liArea2);  
        ulArea.appendChild(liArea3);

        imageArea.setAttribute('id', 'logo');
        liArea1.classList.add('tab1');
        liArea2.classList.add('tab2');
        liArea3.classList.add('tab3');

        liArea1.innerHTML = "About us";
        liArea2.innerHTML = "Menu";
        liArea3.innerHTML = "Contact";
    };

    return { setNav };
})();

export default nav;