const emailMenu = document.querySelector('.nav--email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.nav--menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.nav--cart');
const myOrder = document.querySelector('.order-container');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
}

const toggleMyOrder = () => {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    myOrder.classList.toggle('inactive');
}

emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrder);

