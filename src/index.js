import {nav} from './nav';
import {tab} from './tab';

document.addEventListener('DOMContentLoaded', () => {
    nav.setNav();
    tab.setTab();  
    const aboutTab = document.querySelector('.tab1');
    const menuTab = document.querySelector('.tab2')
    const contactTab = document.querySelector('.tab3')
    const about = document.querySelector('.tab-content1');
    const menu = document.querySelector('.tab-content2');
    const contact = document.querySelector('.tab-content3');

    function aboutClick() {
        about.style.display = "initial";
        menu.style.display = "none";
        contact.style.display = "none";
    }

    function menuClick() {
        about.style.display = "none";
        menu.style.display = "initial";
        contact.style.display = "none";
    }

    function contactClick() {
        about.style.display = "none";
        menu.style.display = "none";
        contact.style.display = "initial";
    }

    aboutTab.addEventListener('click', aboutClick);
    menuTab.addEventListener('click', menuClick);
    contactTab.addEventListener('click', contactClick);
});



 



  



