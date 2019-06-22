/**
 *To include js file from libraries write: `//= include ./path-to-file`
* */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/owl-slider/js/owl.carousel.js

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

  var scrolled;

  function addScrollClass () {
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

  var nav = $('.header-menu');

  $('.header .nav-link').click(function (e) {
    e.preventDefault();
    $('.header .nav-link').removeClass('active');
    $(this).addClass('active');

    nav.removeClass('open');
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

  jQuery(".owl-carousel").owlCarousel({
    loop: !0,
    touchDrag: !0,
    smartSpeed: 1e3,
    margin: 30,
    dots: !1,
    responsiveClass: !0,
    nav: !0,
    navContainer: !1,
    // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      970: {
        items: 3,
        loop: !0
      }
    }
  });

});