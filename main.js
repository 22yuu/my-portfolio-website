'use strict';



// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    console.log(e.target.dataset.link)
    const target = e.target;
    const link = target.dataset.link;
    if(link === null) {
        return;
    }
    scrollIntoView(link);
})

// Handle click on "contact me" button on home
const homeContacttBtn = document.querySelector('.home__contact');
homeContacttBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeContent = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    homeContent.style.opacity = 1 - window.scrollY / homeHeight;
})

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
})

// Handle click on "arrow up" button
arrowUp.addEventListener('click', () => {
    console.log('arrow up clicked')
    scrollIntoView('#home');
})

function scrollIntoView(selectior) {
    const scrollTo = document.querySelector(selectior);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}