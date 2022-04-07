import './style.css';
import {addHometoMain} from './homepage';
import {addMenuToMain} from './menu';
import {addContactToMain} from './contact';

const content = document.querySelector('#content');


const makeHeader = () => {
    const header = document.createElement('header');

    header.appendChild(makeNav());
    return header
}

const makeNav = () => {
    
    const nav = document.createElement('nav');
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Sushi NY';
    h1.id = 'logo';
    
    const ul = document.createElement('ul');
    ul.classList.add('banner-links');
    
    const li1 = document.createElement('li');
    li1.classList.add('link');
    li1.id= 'home';
    const home = document.createElement('button');
    home.innerText = 'Home';
    li1.appendChild(home);
    
    home.addEventListener(('click'), (e) => {
        if(e.target.classList.contains('on')) return;
        const main = document.querySelector('main');
        main.textContent = '';
        toggleOnClass(home);
        addHometoMain();
    })

    const li2 = document.createElement('li');
    li1.classList.add('link');
    li2.id = 'menu';
    const menu = document.createElement('button');
    menu.innerText = 'Menu';
    li2.appendChild(menu);
    
    menu.addEventListener(('click'), (e) => {
        if(e.target.classList.contains('on')) return;
        const main = document.querySelector('main');
        main.innerText = '';
        toggleOnClass(menu);
        addMenuToMain();
    })
    const li3 = document.createElement('li');
    li3.classList.add('link');
    li3.id = 'contact us';
    const contact = document.createElement('button');
    contact.innerText = 'Contact Us';
    li3.appendChild(contact);
    
    contact.addEventListener(('click'), (e) => {
        if(e.target.classList.contains('on')) return;
        const main = document.querySelector('main');
        main.innerText = '';
        toggleOnClass(contact);
        addContactToMain();
    })
    ul.append(li1,li2,li3);
    nav.append(h1,ul);

    return nav;
}

const toggleOnClass = (element) => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((element) => {
        if (element !== this) {
            element.classList.remove('on')
        }})
    element.classList.add('on')
}
const makeMain = () => {
    const main = document.createElement('main');
    return main;
};
(function makePages() {
    content.appendChild(makeHeader());
    content.appendChild(makeMain());
    addHometoMain(); 
})()