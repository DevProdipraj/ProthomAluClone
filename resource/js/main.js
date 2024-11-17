// this code for hamburgerMenu menu 
let hamburgerMenu = document.querySelector('.hamburgerMenu');
let menuOne = document.querySelector('.menuOne');

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('active');
    menuOne.classList.toggle('showMenu');
});

// this code for stick navbar 
const navbar = document.querySelector('.bottom_header');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('sticky', window.scrollY > 50);
})

// this is for aos Animation
AOS.init();

