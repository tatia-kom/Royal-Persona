$(document).ready(function() {

    $('.header__mobile-menu-button').click(function(e) {
        e.preventDefault();

        $('.header').toggleClass('header--opened');
    });

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.header-menu__link').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(href).offset().top+"px"}, 500);
        $('.header').removeClass('header--opened');
    });

    $('.open-modal').click(function(e) {
        e.preventDefault();

        $('#formModal').addClass('modal--opened');
        $('body').addClass('frozen');
    });

    $('.modal').click(function(e) {
        $(this).removeClass('modal--opened');
        $('body').removeClass('frozen');
    });

    $('.modal__close').click(function(e) {
        $(this).parents('.modal').removeClass('modal--opened');
        $('body').removeClass('frozen');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });

    // top slider

    $('.top-slider').addClass('owl-carousel');
    $('.top-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    $('.contacts__map').click(function (e) {
        e.stopPropagation();
        $(this).find('iframe').css({pointerEvents: 'auto'});
    });

    $('body').click(function() {
        $('.contacts__map iframe').css({pointerEvents: 'none'});
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scrolling');
        }
        else {
            $('.header').removeClass('header--scrolling');
        }
    });
});


function openThanksModal() {
    $('#thanksModal').addClass('modal--opened');
    $('body').addClass('frozen');
}