import Sushi from '../images/sushi.jpg';
import Sashimi from '../images/sashimi.jpg';
import Nigiri from '../images/nigiri.jpg';
import Shrimp from '../images/shrimptempura.jpg';

const loadHome = () => {
   

        const imgcont = document.createElement('div');
        imgcont.classList.add('img-container');
        const textcont = document.createElement('div');
        textcont.classList.add('text-container');
        textcont.innerHTML = `<p> Sushi NY is Albany, New York's premier upscale sushi & sake bar. 
                                  With an emphasis on quality sushi and customer service, Sushi & Sushi is the perfect destination for your next dinner party, corporate, or group event. 
                                  Come enjoy our wide selection of sushi & sake. From traditional Japanese sushi and dinner entrees to creative and delicious sushi rolls, we have you covered. 
                                  The food is fantastic and the decor is beautiful!
                                  The only missing ingredient is you!
                            </p>`
        const sushi = new Image();
        sushi.src = Sushi;
        sushi.classList.add('myslides');
        const sashimi = new Image();
        sashimi.src = Sashimi;
        sashimi.classList.add('myslides');
        const nigiri = new Image();
        nigiri.src = Nigiri;
        nigiri.classList.add('myslides');
        const shrimp = new Image();
        shrimp.src = Shrimp;
        shrimp.classList.add('myslides')
        textcont.append(sushi,sashimi,nigiri,shrimp);
       
        return [imgcont, textcont];
    }
    
    let myIndex = 0;
function imageCarousel(){
        // const home = document.getElementById('home')
        // if(home.classList.contains('on')){
        let x = document.getElementsByClassName("myslides");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(imageCarousel, 3000); // Change image every 3 seconds
    // }
}
function addHometoMain() {
        const main = document.querySelector('main');
        const load = loadHome()
        main.append(load[0]);
        main.append(load[1]);
        imageCarousel();
        
}
export {addHometoMain};