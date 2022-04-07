// const { SourceMapDevToolPlugin } = require("webpack");

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
    //    3d48.8583701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sca!4v1648476019475!5m2!1sen!2sca'
    //     `h2 class="contact">Contact Us</h2>
//     <p>Call: 888-88-8888</p>
//    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.966498430253!2d2.2944813!
//    3d48.8583701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sca!4v1648476019475!5m2!1sen!2sca"></iframe>
    
    return textcont;
}
function addContactToMain(){

    const main = document.querySelector('main');
    main.appendChild(loadContact());
}
export {addContactToMain};