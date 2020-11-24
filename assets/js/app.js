$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
})

$('.testimonials .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

AOS.init();

$(window).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
        $('.navigation').addClass('move');
    } else {
        $('.navigation').removeClass('move');
    }
})

$('.hamburger').on('click', () => {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('menu-open');
})