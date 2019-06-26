/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/owl-slider/js/build.js
//= include ../lib/jquery.sticky-kit.js

/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
    /**
     * STICKY-HEADER
     **/
    let scrolled;

    function addScrollClass() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 40) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    }

    addScrollClass();

    $(window).on('scroll', function () {
        addScrollClass();
    });

    /**
     *  TOGGLE ACTIVE CLASS
     * */
    const nav = $('.main-nav');

    $('.main-nav .decor').click(function (e) {
        $('.decor').removeClass('decor_active');
        $(this).addClass('decor_active');

        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    const navFooter = $('.footer-nav');

    $('.footer-nav .decor').click(function (e) {
        e.preventDefault();
        $('.decor').removeClass('decor_active');
        $(this).addClass('decor_active');

        navFooter.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    /**
     * MOB MENU SCRIPT
     **/

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.close-nav, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    /**
     * OWL-CAROUSEL SCRIPT
     **/
    const owl = jQuery("#slider-carousel");
    owl.owlCarousel({
        items: 3,
        pagination: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            970: {
                items: 3,
                loop: false
            }
        }
    });

    /*
     * NUMBER INPUT HANDLER
     */

    $('.number-input__control').click(function(e) {
        e.preventDefault();
        var input = $(this).parent().find('.number-input__field');

        var inputValue = input.val();
        if ($(this).hasClass('number-input__control_plus')) {
            input.val(++inputValue);
        } else if (inputValue <= 0) {
            input.val(0)
        } else {
            input.val(--inputValue);
        }
    });

    /*
     * STICKY SIDEBAR
     */

    if( ($('#sidebar').length > 0) && ($('#sticky-parent').length > 0) ) {
        $("#sidebar").stick_in_parent({
            parent: $('#sticky-parent'),
            offset_top: $('.header').outerHeight()
        });
    }

});