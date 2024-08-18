let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//focus


document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});


window.addEventListener("scroll", function () {
    var navbarhome = document.querySelector('.menu-home');
var navbarabout = document.querySelector('.menu-about');
var navbarmenu = document.querySelector('.menu-menu');
var navbargalery = document.querySelector('.menu-galery');
var navbarcontact = document.querySelector('.menu-contact');
    var scrollPosition = window.scrollY; // Mendapatkan posisi scroll vertikal

    // Tentukan threshold scroll tertentu (misalnya 100 piksel)
    if (scrollPosition > 0 && scrollPosition < 700) {
        navbarmenu.classList.remove("active");
        navbarabout.classList.remove("active");
        navbargalery.classList.remove("active")
        navbarcontact.classList.remove("active");
      navbarhome.classList.add("active");
    }
    else if (scrollPosition > 700 && scrollPosition < 1490) {
        navbarmenu.classList.remove("active");
      navbargalery.classList.remove("active");
      navbarcontact.classList.remove("active");
      navbarhome.classList.remove("active");
      navbarabout.classList.add("active"); // Tambahkan kelas navbar-scrolled
    } else if(scrollPosition > 1490 && scrollPosition < 2850) {
        navbargalery.classList.remove("active");
        navbarabout.classList.remove("active");
        navbarcontact.classList.remove("active")
        navbarhome.classList.remove("active");
      navbarmenu.classList.add("active"); // Hapus kelas navbar-scrolled
      
    }else if(scrollPosition > 2850 && scrollPosition < 4560){
        navbarmenu.classList.remove("active");
        navbarabout.classList.remove("active");
        navbarcontact.classList.remove("active");
        navbarhome.classList.remove("active");
      navbargalery.classList.add("active");
    }
    else if(scrollPosition > 4560){
        navbarmenu.classList.remove("active");
        navbarabout.classList.remove("active");
        navbargalery.classList.remove("active");
        navbarhome.classList.remove("active");
      navbarcontact.classList.add("active");
    }
  });

