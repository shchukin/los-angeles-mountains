(function ($) {

    /* Slick init */

    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: true,
        gap: 10
    });

    $('.owl-carousel').owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 10,
        smartSpeed: 175,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            360: {
                items: 2,
                slideBy: 2,
            },
            600: {
                items: 3,
                slideBy: 3,
            },
            1100: {
                items: 4,
                slideBy: 4,
            }
        }
    })

    /* Header color scheme */

    const $html = $('html');

    const isScrolled = () => {
        if ($(window).scrollTop() > 80) {
            $html.addClass('scrolled')
        } else {
            $html.removeClass('scrolled')
        }
    }

    $(window).on('scroll', isScrolled);
    $(document).ready(isScrolled);


    /* Smooth scrolling */

    const $header = $('.header');

    $('.header__link').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $(this).attr("href") ).offset().top - $header.outerHeight()
        }, 600);
    });

})(jQuery);
