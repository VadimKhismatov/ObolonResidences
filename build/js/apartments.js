"use strict";

function apartments() {
    console.log("apartments");

    var $sectionA = $(".apartments_info--section-a");
    var $sectionB = $(".apartments_info--section-b");

    $(".choose_section__btn--a").on("click", function () {
        apartmentsNav($sectionA);
    });

    $(".choose_section__btn--b").on("click", function () {
        apartmentsNav($sectionB);
    });

    apartmentsNav($sectionB);

    $(".flat_modal__close").on("click", function () {
        $(".flat_modal").hide();
        $(window).unbind('scroll');
    });

    function apartmentsNav($section) {

        $(".apartments_info").hide();

        var $apartmentsSection = $section;
        $apartmentsSection.show();

        var $allRoomsBlock = $(".choose_room");
        var $allRooms = $apartmentsSection.find(".room");
        var $allFlats = $allRooms.find(".flat");

        $allRooms.hide();
        $allFlats.hide();

        var $btnSection;
        var $sectionRoomBlock;
        var $btnRooms;

        if ($apartmentsSection.attr("data-section") === "section-a") {
            $allRoomsBlock.hide();

            $sectionRoomBlock = $(".choose_room--section-a");
            $sectionRoomBlock.show();

            $btnSection = $(".choose_section__btn--a");
        } else {
            $allRoomsBlock.hide();

            $sectionRoomBlock = $(".choose_room--section-b");
            $sectionRoomBlock.show();

            $btnSection = $(".choose_section__btn--b");
        }

        $btnSection.addClass("section-active").siblings().removeClass("section-active");

        $allRooms.eq(0).show();
        $allRooms.eq(0).find(".flat_section_1_type1").show();

        $btnRooms = $sectionRoomBlock.find(".apartments__topline__rooms").children();
        $btnRooms.removeClass("room-active");
        $btnRooms.eq(0).addClass("room-active");

        $allRooms.eq(0).find(".flat_section_1_type1").find(".info__type").each(function () {
            $(this).on("click", function () {
                if ($(this).attr("data-type") == "type1") {
                    return;
                } else if ($(this).attr("data-type") == "type1p") {
                    $(".flat_section_1_type1p").show().siblings().hide();
                }
            });
        });
        $allRooms.eq(0).find(".flat_section_1_type1p").find(".info__type").each(function () {
            $(this).on("click", function () {
                if ($(this).attr("data-type") == "type1") {
                    $(".flat_section_1_type1").show().siblings().hide();
                } else if ($(this).attr("data-type") == "type1p") {
                    return;
                }
            });
        });

        $btnRooms.each(function (roomIdx) {
            $(this).on("click", function () {
                if ($(this).attr("data-room") == "room1") {

                    $(this).addClass("room-active").siblings().removeClass("room-active");
                    $allRooms.eq(roomIdx).show().siblings().hide();
                } else if ($(this).attr("data-room") == "room2") {

                    $(this).addClass("room-active").siblings().removeClass("room-active");
                    $allRooms.eq(roomIdx).show().siblings().hide();
                    $allRooms.eq(roomIdx).children().hide();
                    $allRooms.eq(roomIdx).children().eq(0).show();

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                return;
                            } else if ($(this).attr("data-type") == "type1p") {
                                $(".flat_section_1_type1p").show().siblings().hide();
                            }
                        });
                    });

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1p").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                $(".flat_section_1_type1").show().siblings().hide();
                            } else if ($(this).attr("data-type") == "type1p") {
                                return;
                            }
                        });
                    });
                } else if ($(this).attr("data-room") == "room3") {

                    $(this).addClass("room-active").siblings().removeClass("room-active");
                    $allRooms.eq(roomIdx).show().siblings().hide();
                    $allRooms.eq(roomIdx).children().hide();
                    $allRooms.eq(roomIdx).children().eq(0).show();

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                return;
                            } else if ($(this).attr("data-type") == "type1p") {
                                $(".flat_section_1_type1p").show().siblings().hide();
                            }
                        });
                    });

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1p").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                $(".flat_section_1_type1").show().siblings().hide();
                            } else if ($(this).attr("data-type") == "type1p") {
                                return;
                            }
                        });
                    });
                } else if ($(this).attr("data-room") == "penthouse") {

                    $(this).addClass("room-active").siblings().removeClass("room-active");
                    $allRooms.eq(roomIdx).show().siblings().hide();
                    $allRooms.eq(roomIdx).children().hide();
                    $allRooms.eq(roomIdx).children().eq(0).show();

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                return;
                            } else if ($(this).attr("data-type") == "type1p") {
                                $(".flat_section_1_type1p").show().siblings().hide();
                            }
                        });
                    });

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1p").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                $(".flat_section_1_type1").show().siblings().hide();
                            } else if ($(this).attr("data-type") == "type1p") {
                                return;
                            }
                        });
                    });
                }
            });
        });

        flatModal($apartmentsSection);
    };

    function flatModal($section) {

        $section.find(".room").each(function () {
            $(this).find(".flat").each(function () {
                $(this).find(".apartment_layout").on("click", function () {
                    $(this).parent().find(".flat_modal").show();
                    OffScroll();
                });
            });
        });
    };
};