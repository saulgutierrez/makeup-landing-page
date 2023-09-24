/* Configuracion Swiper (Seccion Inicio) */
const swiper = new Swiper('.swiper-hero', {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

/* Configuracion Swiper (Seccion Nuestros Clientes) */
const swiper2 = new Swiper('.swiper-clientes', {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

/* Cambiar background del menú al hacer scroll */
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('active', window.scrollY > 0);
})

/* Activar menú responsive */
let nav = document.querySelector('nav');
let menuToggle = document.querySelector('.menu-toggle');
let enlaces = nav.querySelectorAll('a');

menuToggle.addEventListener('click', function() {
    header.classList.add('active');
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
})

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    })
})