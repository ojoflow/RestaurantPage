const loadMenu = () => {
    const textcont = document.createElement('div');
    textcont.classList.add('text-container');
    textcont.innerHTML = `
                            <p class="paragraph-flex">
                            <ul class="menu">
                                <li>Miso soup $4</li><br>
                                <li>Chicken Wings $6</li><br>
                                <li>Rainbow Roll $12</li><br>
                                <li>California Roll $9</li><br>
                                <li>Nigiri Platter $15</li><br>
                                <li>Gyoza $6</li>

                            </ul>
                            </p>`
    return textcont;
                        }
function addMenuToMain() {

    const main = document.querySelector('main');
    main.appendChild(loadMenu());
}
export {addMenuToMain}; 