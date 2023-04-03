
const menu = document.querySelector('.icono_burguer');
const menuResponsive = document.querySelector('.menu_nav');



menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_hidden');

})