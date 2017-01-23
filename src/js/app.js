// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnific-popup.js
//=include mobileMenu.js
//=include apartments.js

sayHello();
$(document).ready(function () {
    mobileMenu();
    mainSlider();
    formModal();
    benefitsModal();
    apartments();
    webcam();
    galary();
    initMap();
});

function OffScroll() {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll', function () {
        $(window).scrollTop(winScrollTop);
    });
}

function initMap() {
    var mapId = document.getElementById("map");
    var places = [];

    //Это класс для удобного манипулирования местами
    function Place(title, latitude, longitude, icon) {
        this.title = title;  // название
        this.latitude = latitude;  // широта
        this.longitude = longitude;  // долгота
        this.icon = icon;  // иконка
    }

    places.push(new Place("Obolon Residence", 50.513291, 30.499907, "img/residence.png"));
    places.push(new Place("Privat Bank", 50.513867, 30.496080, "img/banks.png"));
    places.push(new Place("Metro", 50.513082, 30.497866, "img/metro.png"));
    places.push(new Place("Dentist", 50.513780, 30.495270, "img/dentist.png"));
    places.push(new Place("Pharmacy", 50.512995, 30.503163, "img/drugstore.png"));
    places.push(new Place("Pharmacy", 50.512964, 30.502313, "img/drugstore.png"));
    places.push(new Place("Pharmacy", 50.512781, 30.501302, "img/drugstore.png"));
    places.push(new Place("Cafe", 50.513468, 30.497356, "img/cafe.png"));
    places.push(new Place("Cafe", 50.513475, 30.497976, "img/cafe.png"));

    var mapOptions = {
        center: new google.maps.LatLng(50.513291, 30.499907),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    if ($(window).width() <= 320) {
        mapOptions.zoom = 15;
    }

    var map = new google.maps.Map(mapId, mapOptions);

    var myLatLng = { lat: 50.513291, lng: 30.499907 };

    for (var i = 0; i < places.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(places[i].latitude, places[i].longitude),
            map: map,
            title: places[i].title,
            icon: places[i].icon
        });
    }


}

function formModal() {
    $('.contact_appointment__link').magnificPopup({
        type: 'inline',
        modal: true
    });
    $('.form--sign_up_close').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
};

/*function for modals for benefits */


function benefitsModal() {
    $(".benefits_modal_link").magnificPopup({
        type: "inline",
        modal: true
    });

    $(".benefits_modal__close").on("click", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
};

function webcam() {

    $(".webcam").magnificPopup({
        type: "inline",
        modal: true
    });

    $(".webcam_close").on("click", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
};

function galary() {
    var $galleryMdl = $(".gallery_modal");

    $(".gallery").on("click", function (e) {
        e.preventDefault();
        gallerySlider();
        OffScroll();
        $galleryMdl.css("display", "block");
    });

    $(".gallery_close").on("click", function (e) {
        e.preventDefault();
        $galleryMdl.css("display", "none");
        $(".gallery-slider").slick('unslick');
        $(window).unbind("scroll");
    });
};


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

function gallerySlider() {

    $(".gallery-slider").slick({
        infinity: true,
        arrows: true,
        prevArrow: $(".gallery_arrow--prev"),
        nextArrow: $(".gallery_arrow--next"),
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
    });
}

