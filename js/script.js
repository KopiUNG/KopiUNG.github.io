let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let navbarhome = document.querySelector('.menu-home');
let navbarabout = document.querySelector('.menu-about');
let navbarmenu = document.querySelector('.menu-menu');
let navbargalery = document.querySelector('.menu-galery');
let navbarcontact = document.querySelector('.menu-contact');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//focus

navbarhome.onclick = () => {
    navbarhome.classList.add('active');
    navbarabout.classList.remove('active');
    navbarmenu.classList.remove('active');
    navbargalery.classList.remove('active');
    navbarcontact.classList.remove('active');
};
navbarabout.onclick = () => {
    navbarabout.classList.add('active');
    navbarhome.classList.remove('active');
    navbarmenu.classList.remove('active');
    navbargalery.classList.remove('active');
    navbarcontact.classList.remove('active');
};
navbarmenu.onclick = () => {
    navbarmenu.classList.add('active');
    navbarhome.classList.remove('active');
    navbarabout.classList.remove('active');
    navbargalery.classList.remove('active');
    navbarcontact.classList.remove('active');
};

navbargalery.onclick = () => {
    navbargalery.classList.add('active');
    navbarhome.classList.remove('active');
    navbarmenu.classList.remove('active');
    navbarabout.classList.remove('active');
    navbarcontact.classList.remove('active');
};

navbarcontact.onclick = () => {
    navbarcontact.classList.add('active');
    navbarhome.classList.remove('active');
    navbarmenu.classList.remove('active');
    navbargalery.classList.remove('active');
    navbarabout.classList.remove('active');
};


document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

