const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

            //Animate Links

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7}s`;
                
                
            }
        
        });

        //Burger Animation

        burger.classList.toggle('toggle');
    });



}

// return to top button
const returnButton = () =>{
    const returnButton = document.getElementById('return-button');
    window.onscroll = function() {scrollFunction()};

    //display
    const scrollFunction = () =>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            returnButton.style.display = "block";
          } else {
            returnButton.style.display = "none";
          }
    }

    //to top
    returnButton.addEventListener('click', () =>{
        document.body.scrollTop = 0; // for safari
        document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    });
}

// change background colour
const projectOne = () =>{
    const colourChangeButton = document.querySelector('.project1-button');
    const resetColourButton = document.querySelector('.project1-reset-button');
    const projectSection = document.getElementById('projects');

    //generate random
    colourChangeButton.addEventListener('click',()=>{
        console.log("heelo");
        projectSection.style.backgroundColor = `rgb(${Math.floor(Math.random() * 254) + 1},${Math.floor(Math.random() * 254) + 1},${Math.floor(Math.random() * 254) + 1})`;
        resetColourButton.style.display = 'block';

    });

    resetColourButton.addEventListener('click',() =>{
        projectSection.style.backgroundColor = `white`;
        resetColourButton.style.display = 'none';
    });
}

// tic tac toe
const projectTwo = () =>{

    
}

const app = () =>{
    navSlide();
    returnButton();
    projectOne();
    projectTwo();
}

app();