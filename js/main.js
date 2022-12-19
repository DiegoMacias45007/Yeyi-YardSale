const emailMenu = document.querySelector('.nav--email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.nav--menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.nav--cart');
const backCart = document.querySelector('.back');
const myOrder = document.querySelector('.order-container');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
    myOrder.classList.add('inactive');
}

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
    myOrder.classList.add('inactive');
}

const toggleMyOrder = () => {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    myOrder.classList.toggle('inactive');
}

emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrder);
backCart.addEventListener('click', toggleMyOrder);

