// Rigvex Pharma — site interactions

document.addEventListener('DOMContentLoaded', function () {

    // Init AOS scroll animations
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, offset: 60, duration: 750 });
    }

    // Nav shadow on scroll
    var nav = document.getElementById('siteNav');
    if (nav) {
        window.addEventListener('scroll', function () {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    // Mobile hamburger
    var hamburger = document.getElementById('hamburger');
    var mainNav = document.getElementById('mainNav');
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        });
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('open');
            });
        });
    }

    // Contact form placeholder
    var form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('connect it to your backend or email service before going live.');
        });
    }

});