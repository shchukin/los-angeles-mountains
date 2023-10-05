(function($) {

    const $html = $('html');

    const isScrolled = () => {
        if ($(window).scrollTop() > 80) {
            $html.addClass('scrolled')
        } else  {
            $html.removeClass('scrolled')
        }
    }

    $(window).on('scroll', isScrolled);
    $(document).ready(isScrolled);

})(jQuery);
