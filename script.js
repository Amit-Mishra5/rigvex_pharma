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

// Animate on scroll (AOS replacement)
function initAOS() {
    var elements = document.querySelectorAll('[data-aos]');
    var observer = new window.IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                // Handle delay
                var delay = el.getAttribute('data-aos-delay');
                if (delay) {
                    setTimeout(function () {
                        el.classList.add('aos-animate');
                    }, parseInt(delay, 10));
                } else {
                    el.classList.add('aos-animate');
                }
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(function (el) {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initAOS();
    // ...your other JS code...
});
