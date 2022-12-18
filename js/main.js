const emailMenu = document.querySelector('.nav--email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.nav--menu');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () =>{
    mobileMenu.classList.toggle('inactive');
}

emailMenu.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);

