// Smooth scrolling
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// Cambiar la clase de la barra de navegación al hacer scroll
$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var nav = $('header');

    if (scrollTop > nav.outerHeight()) {
        nav.addClass('navbar-sticky');
    } else {
        nav.removeClass('navbar-sticky');
    }
});
