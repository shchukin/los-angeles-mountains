(function ($) {

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
