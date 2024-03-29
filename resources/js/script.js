$(document).ready(function() {

    // for the sticky navigation==================================================
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px'
    });

    // scroll on buttons===========================================================
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 500);
    });


    // NAVIGATION SCROLL===========================================================

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                const target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 700, function() {
                        // Callback after animation
                        // Must change focus!
                        const $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated bounce')
    }, {
        offset: '65%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated bounce')
    }, {
        offset: '65%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '45%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '45%'
    });

    // mobile nav
    $(".js--nav-icon").click(function() {
        const nav = $(".js--main-nav");
        const icon = $(".js--nav-icon i");
        nav.slideToggle(200);
        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });



});