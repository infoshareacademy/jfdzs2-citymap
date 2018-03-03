$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('a').addClass('padding');
    } else {
        $('a').removeClass('padding');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar-brand').addClass('resize-logo');
    } else {
        $('.navbar-brand').removeClass('resize-logo');
    }
});