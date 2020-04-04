$(window).scroll(function() {
    if ($(document).scrollTop() < 600) {
        $('nav').addClass('transparent');
    } else {
        $('nav').removeClass('transparent');
    }
    console.log(scroll);
    });