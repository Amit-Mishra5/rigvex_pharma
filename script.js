// Rigvex Pharma — Multi-Specialty Site Interactions

document.addEventListener('DOMContentLoaded', function () {

    // ── Reveal on scroll (Intersection Observer, no CDN needed) ──
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(function (el) { observer.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('visible'); });
    }

    // ── Nav shadow on scroll ──
    var nav = document.getElementById('siteNav');
    if (nav) {
        window.addEventListener('scroll', function () {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    // ── Mobile hamburger ──
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

    // ── Product filter tabs ──
    var filterBtns = document.querySelectorAll('.filter-btn');
    var productCards = document.querySelectorAll('#productGrid .product-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Update active button
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.getAttribute('data-filter');

            productCards.forEach(function (card) {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    var specialties = (card.getAttribute('data-specialty') || '');
                    if (specialties.split(' ').indexOf(filter) !== -1) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ── Specialty cards click to filter products ──
    var specialtyCards = document.querySelectorAll('.specialty-card');
    specialtyCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var filter = card.getAttribute('data-filter');
            // Scroll to products
            var productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Activate the correct filter button
            setTimeout(function () {
                filterBtns.forEach(function (btn) {
                    if (btn.getAttribute('data-filter') === filter) {
                        btn.click();
                    }
                });
                // Update active specialty card
                specialtyCards.forEach(function (sc) { sc.classList.remove('active'); });
                card.classList.add('active');
            }, 400);
        });
    });

    // ── Contact form placeholder ──
    var form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('connect it to your backend or email service before going live.');
        });
    }

});