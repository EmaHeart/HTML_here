

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar_toggle');
    const nav = document.querySelector('.nav');

    navbarToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        navbarToggle.classList.toggle('open');
    });
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.home .nav');
    var scrolled = window.scrollY;

    // Change background color when user starts scrolling
    if (scrolled > 100) {
        nav.classList.add('scrolled'); // Change to desired background color
    } else {
        nav.classList.remove('scrolled');  // Change to initial background color
    }
});



