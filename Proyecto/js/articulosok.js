const menu = document.querySelector('.icono_burguer');
const menuResponsive = document.querySelector('.menu_nav');

menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_hidden');
})

const ordenar = document.querySelector('.icono_flecha');
const ordenResponsive = document.querySelector('.orden_nav');

ordenar.addEventListener('click', () => {
    ordenResponsive.classList.toggle('orden_hidden');
})