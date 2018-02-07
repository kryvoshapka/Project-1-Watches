$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 200);

    $('.burger').click(function () {
        $(this).toggleClass('fa-close fa-bars');
        $('nav').toggleClass('active');
    });

});