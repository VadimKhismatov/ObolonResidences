'use strict';

function modals() {

    //init
    formModal();
    benefitsModal();
    webcam();
    gallery();

    //function for opening modal of callback form
    function formModal() {
        $('.header_contacts__appointment-link').magnificPopup({
            type: 'inline',
            modal: true
        });
        $('.form--sign_up_close').on('click', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    };

    //function for modal of benefits
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

    //function for modall of webcam
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

    //function for modal of gallery and slider in it
    function gallery() {

        //slider in gallery
        function gallerySlider() {

            $(".slider-gallery").slick({
                infinity: true,
                arrows: true,
                prevArrow: $(".gallery_arrow--prev"),
                nextArrow: $(".gallery_arrow--next"),
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 768,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }]
            });
        }

        $(".gallery-open").magnificPopup({
            type: 'inline',
            modal: true
        });

        gallerySlider();
        $(".gallery_close").on('click', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    };
};