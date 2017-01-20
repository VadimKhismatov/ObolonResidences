"use strict";

function apartments() {
    console.log("apartments");

    var $btnSectionA = $(".choose_section__btn--a");
    var $btnSectionB = $(".choose_section__btn--b");

    $btnSectionA.on("click", function () {

        $(this).addClass("section-active").siblings().removeClass("section-active");
        $(".choose_room--section-b").css("display", "none");
        $(".choose_room--section-a").css("display", "block");
        sectionA();
    });

    /* $sectionB.on("click", function () {
         $(this).addClass("section-active").siblings().removeClass("section-active");
         $(".choose_room--section-a").css("display", "none");
         $(".choose_room--section-b").css("display", "block");
            $titleSection.text("Секция 2");
            var $roomsB = $(".choose_room--section-b").find(".apartments__topline__rooms").children().eq(0).addClass("room-active");
         //console.log("rooms in sectionB", roomsB);
     });*/

    function sectionA() {

        var $sectionA = $(".apartments_info--section-a");
        var $titleSectionA = $sectionA.find(".info__title--section");
        var $roomTitleSectionA = $sectionA.find(".info__title--rooms");
        var $allRoomsTypesWraps = $sectionA.find(".info__type-wrap");
        var $image = $sectionA.find(".apartment_layout img");
        $titleSectionA.text("секция 1");

        var $roomsA = $(".choose_room--section-a").find(".apartments__topline__rooms").children() /*.eq(0).addClass("room-active")*/;
        //console.log("rooms in sectionA", $roomsA);

        $roomsA.each(function (roomIdx) {
            $(this).on("click", function () {
                $(this).addClass("room-active").siblings().removeClass("room-active");
                if (roomIdx === $roomsA.length - 1) {

                    $roomTitleSectionA.text("пентхаус");
                    $allRoomsTypesWraps.css("display", "none");
                    $allRoomsTypesWraps.eq(roomIdx).css("display", "block");

                    $allRoomsTypesWraps.eq(roomIdx).children().each(function () {
                        $(this).on("click", function () {
                            $(this).addClass("info__type--active").siblings().removeClass("info__type--active");
                            $image.attr("alt", "section-1-room-" + (roomIdx + 1) + "-scheme-" + $(this).attr("data-type"));
                        });
                    });
                } else {

                    $roomTitleSectionA.text(roomIdx + 1 + "-комнатная");
                    $allRoomsTypesWraps.css("display", "none");
                    $allRoomsTypesWraps.eq(roomIdx).css("display", "block");

                    $allRoomsTypesWraps.eq(roomIdx).children().each(function (typeIdx) {
                        $(this).on("click", function () {
                            $(this).addClass("info__type--active").siblings().removeClass("info__type--active");
                            $image.attr("alt", "section-1-room-" + (roomIdx + 1) + "-scheme-" + $(this).attr("data-type"));
                        });
                    });
                }
            });
        });
    };
};