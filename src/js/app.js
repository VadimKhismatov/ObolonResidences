// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnific-popup.js
//=include menu.js
//=include apartments.js
//=include map.js
//=include modals.js

$(document).ready(function () {
    menu();
    mainSlider();
    modals();
    apartments();
    map();
    

});

function mainSlider() {
    $(".slider").slick({
        infinity: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        useTransform: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 3000
    });
};

