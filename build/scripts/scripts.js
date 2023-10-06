(function ($) {

    /* Init Slick */

    $('.history__carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        accessibility: false, /* because of wrong tabindex */
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    draggable: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    draggable: true,
                }
            }
        ]
    })
    .magnificPopup({
        delegate: '.history__thumb',
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 200,
    });


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
            scrollTop: $($(this).attr("href")).offset().top - $header.outerHeight()
        }, 600);
    });

})(jQuery);
