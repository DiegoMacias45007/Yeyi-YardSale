const emailMenu = document.querySelector('.nav--email');
const desktopMenu = document.querySelector('.desktop-menu');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

emailMenu.addEventListener('click', toggleDesktopMenu);