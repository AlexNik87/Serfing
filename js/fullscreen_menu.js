const burger = document.querySelector('.burger');
const fullscreenMenu = document.querySelector('.fullscreen-menu');
const item = document.querySelector('.fullscreen-menu__list');
const body = document.querySelector('body');

burger.onclick = function() {
    burger.classList.toggle('burger--active');
    fullscreenMenu.classList.toggle('fullscreen-menu--active'); 
    body.classList.toggle('body--active-menu');   
}

item.onclick = function() {
    burger.classList.toggle('burger--active');
    fullscreenMenu.classList.toggle('fullscreen-menu--active');
    body.classList.toggle('body--active-menu');    
}
