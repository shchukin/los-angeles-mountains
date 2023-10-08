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
                breakpoint: 740,
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

    $('.anchor').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - $header.outerHeight()
        }, 600);
    });


    /* Climb desktop */

    $('.climb__link').on('click', function () {
        const $this = $(this);
        if (!$this.hasClass('climb__link--current')) {
            $('.climb__link--current').removeClass('climb__link--current');
            $this.addClass('climb__link--current');
            $('.climb__item--current').removeClass('climb__item--current');
            $('.climb__item').eq($this.index()).addClass('climb__item--current');
        }
    });

    $('.climb__handler').on('click', function () {
        const $thisItem = $(this).parents('.climb__item');

        if (!$thisItem.hasClass('climb__item--expanded')) {
            $('.climb__item--expanded').removeClass('climb__item--expanded');
            $thisItem.addClass('climb__item--expanded');
        } else {
            $thisItem.removeClass('climb__item--expanded');
        }
    });

})(jQuery);



















