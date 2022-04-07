

const loadContact = () => {
    
    const textcont = document.createElement('div'); 
    textcont.classList.add('text-container')
    
    const h2 = document.createElement('h2');
    h2.innerText = 'Contact Us';

    const p = document.createElement('p');
    p.innerText = 'Call: 888-88-8888';
    
     const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCo463tm4QFp7ZkJlRdXcY1rRK7UjMl3GI&q=City+Hall%2C+New+York%2C+NY';
    map.allowFullscreen = '';
    map.loading = 'lazy';
    textcont.append(h2,p,map);

    
    return textcont;
}
function addContactToMain(){

    const main = document.querySelector('main');
    main.appendChild(loadContact());
}
export {addContactToMain};