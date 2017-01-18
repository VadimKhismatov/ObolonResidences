// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnific-popup.js

sayHello();

window.onload = function () {
    initMap();
};

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

    places.push(new Place("Obolon Residence", 50.513291, 30.499907, "../img/residence.png"));
    places.push(new Place("Privat Bank", 50.513867, 30.496080, "../img/banks.png"));
    places.push(new Place("Metro", 50.513082, 30.497866, "../img/metro.png"));
    places.push(new Place("Dentist", 50.513780, 30.495270, "../img/dentist.png"));
    places.push(new Place("Pharmacy", 50.512995, 30.503163, "../img/drugstore.png"));
    places.push(new Place("Pharmacy", 50.512964, 30.502313, "../img/drugstore.png"));
    places.push(new Place("Pharmacy", 50.512781, 30.501302, "../img/drugstore.png"));
    places.push(new Place("Cafe", 50.513468, 30.497356, "../img/cafe.png"));
    places.push(new Place("Cafe", 50.513475, 30.497976, "../img/cafe.png"));

    var mapOptions = {
        center: new google.maps.LatLng(50.513291, 30.499907),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

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
$(document).ready(function () {
    $('.contact_appointment__link').magnificPopup({
        type: 'inline',
        modal: true
    });
});

$(document).on('click', '.form--sign_up_close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});

console.log($(".benefits_block").offset());

$(window).scroll(function(){
    console.log($(this).scrollTop());
});


