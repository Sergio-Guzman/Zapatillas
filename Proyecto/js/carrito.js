const menu = document.querySelector('.container__hamburguer');
const menuResponsive = document.querySelector('.menu__nav');


menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu__hidden');
})