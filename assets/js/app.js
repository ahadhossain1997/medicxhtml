"use strict";

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  medicx PRELOADER JS INIT
  medicx STICKY MENU JS INIT
  medicx HERO SLIDER JS INIT
  medicx COUNTER JS INIT
  medicx TESTIMONIAL SLIDER JS INIT
  medicx SERVICE SLIDER SECTION JS INIT
  medicx SLIDER LOGO JS INIT
  medicx SERVICE CONTENT SLIDER SECTION JS INIT
  medicx MAGNIFIC POPUP JS INIT
  medicx TESTIMONIAL SLIDER JS INIT
  medicx PORTFOLIO MASONAY FILTER JS
  medicx MAP JS INIT
  medicx TOGGOLE PASSWOR JS INIT
  medicx WOW JS INIT
  medicx DATEPICKER JS INIT
  medicx SELECT OPTION JS INIT
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    medicx PRELOADER JS INIT
    --------------------------------------------------------------*/

    $(".medicx-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    medicx STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    medicx HERO SLIDER JS INIT
    --------------------------------------------------------------*/

    /*----------- Custom Animaiton For Slider ----------*/
    $('[data-ani-duration]').each(function () {
      var durationTime = $(this).data('ani-duration');
      $(this).css('animation-duration', durationTime);
    });
    $('[data-ani-delay]').each(function () {
      var delayTime = $(this).data('ani-delay');
      $(this).css('animation-delay', delayTime);
    });
    $('[data-ani]').each(function () {
      var animaionName = $(this).data('ani');
      $(this).addClass(animaionName);
      $('.slick-current [data-ani]').addClass('slider-animated');
    });
    $('.global-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).find('[data-ani]').removeClass('slider-animated');
      $(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
    });
    var hero_slider = $('.medicx-hero-slider-init');
    if (hero_slider.is_exist()) {
      hero_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        lazyLoad: 'progressive',
        prevArrow: '<button class="slide-arrow medicx-hero-next"></button>',
        nextArrow: '<button class="slide-arrow medicx-hero-prev"></button>'
      }).slickAnimation();
    }
    var hero_slider = $('.medicx-hero-slider-init2');
    if (hero_slider.is_exist()) {
      hero_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        lazyLoad: 'progressive'
      }).slickAnimation();
    }
    var hero_slider = $('.medicx-hero-slider-init3');
    if (hero_slider.is_exist()) {
      hero_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        lazyLoad: 'progressive'
      }).slickAnimation();
    }
    /*--------------------------------------------------------------
    medicx COUNTER JS INIT
    --------------------------------------------------------------*/
    var medicx_counter = $('#medicx-counter');
    if (medicx_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(medicx_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.medicx-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    medicx TESTIMONIAL SLIDER JS INIT
    --------------------------------------------------------------*/
    var t_slider = $('.medicx-testimonial-slider-init');
    if (t_slider.is_exist()) {
      t_slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        infinite: true,
        centerMode: true,
        centerPadding: '200px',
        lazyLoad: 'progressive',
        prevArrow: '<button class="slide-arrow medicx-t-next"></button>',
        nextArrow: '<button class="slide-arrow medicx-t-prev"></button>',
        responsive: [{
          breakpoint: 1349,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }
    var t_slider = $('.medicx-testimonialv2-slider-init');
    if (t_slider.is_exist()) {
      t_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        infinite: true,
        lazyLoad: 'progressive',
        prevArrow: '<button class="slide-arrow medicx-t-next"></button>',
        nextArrow: '<button class="slide-arrow medicx-t-prev"></button>'
      }).slickAnimation();
    }
    var t_slider = $('.medicx-testimonial-slider-init3');
    if (t_slider.is_exist()) {
      t_slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        infinite: true,
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    // medicx SERVICE SLIDER SECTION JS INIT
    var slider_service_section = $('.medicx-slider-service-section');
    if (slider_service_section.is_exist()) {
      slider_service_section.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear'
      });
    }

    /*--------------------------------------------------------------
    medicx SLIDER LOGO JS INIT
    --------------------------------------------------------------*/

    var slider_logo = $('.medicx-slider-logo-wrap');
    if (slider_logo.is_exist()) {
      slider_logo.slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    medicx MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    /*--------------------------------------------------------------
    medicx PORTFOLIO MASONAY FILTER JS
    ------------------------------------------------------------*/

    var medicx_filter_gallery = $('#medicx-portfolio-grid');
    if (medicx_filter_gallery.is_exist()) {
      var $container = $(medicx_filter_gallery),
        colWidth = function colWidth() {
          var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
          if (w > 1200) {
            columnNum = 2;
          } else if (w > 900) {
            columnNum = 2;
          } else if (w > 600) {
            columnNum = 2;
          } else if (w > 450) {
            columnNum = 1;
          } else if (w > 385) {
            columnNum = 1;
          }
          columnWidth = Math.floor(w / columnNum);
          $container.find('.collection-grid-item').each(function () {
            var $item = $(this),
              multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
            $item.css({
              width: width
            });
          });
          return columnWidth;
        },
        isotope = function isotope() {
          $container.isotope({
            resizable: false,
            itemSelector: '.collection-grid-item',
            masonry: {
              columnWidth: colWidth(),
              gutterWidth: 0
            }
          });
        };
      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.medicx-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }
        return false;
      });
    }
  }); // End window LODE

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  /*--------------------------------------------------------------
  medicx MAP JS INIT
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'fugu'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>fugu' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  // external js: isotope.pkgd.js

  // medicx TOGGOLE PASSWOR JS INIT

  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // medicx WOW JS INIT

  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();
  AOS.init({
    duration: 1200
  });
  var currentYear = new Date().getFullYear();
  $('#current-year').text(currentYear);

  // medicx DATEPICKER JS INIT

  jQuery(document).ready(function () {
    jQuery('#datepicker').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
    });
  });
  jQuery(document).ready(function () {
    jQuery('#id_StartDate').datepicker({
      dateFormat: 'yy/mm/dd',
      startDate: '0d',
      minDate: 0,
      highlightWeek: true
    });
  });

  // medicx SELECT OPTION JS INIT

  var index = 1;
  var on = function on(listener, query, fn) {
    document.querySelectorAll(query).forEach(function (item) {
      item.addEventListener(listener, function (el) {
        fn(el);
      });
    });
  };
  on('click', '.selectBtn', function (item) {
    var next = item.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
  });
  on('click', '.option', function (item) {
    item.target.parentElement.classList.remove('toggle');
    var parent = item.target.closest('.select').children[0];
    parent.setAttribute('data-type', item.target.getAttribute('data-type'));
    parent.innerText = item.target.innerText;
  });
})(jQuery);