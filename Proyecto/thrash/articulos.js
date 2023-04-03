const menu = document.querySelector('.icono_burguer');
const menuResponsive = document.querySelector('.menu_nav');



menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_hidden');

})

const opcion = document.querySelector('.flecha')
const ordenResponsive = document.querySelector('.orden-hidden')

opcion.addEventListener('click', () => {
    ordenResponsive.classList.toggle('.orden-hidden')
})