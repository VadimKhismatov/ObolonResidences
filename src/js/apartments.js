function apartments() {
    console.log("apartments");


    $(".choose_section__btn--a").on("click", function () {
        sectionA();
    });
    $(".choose_section__btn--b").on("click", function () {
        sectionB();
    });

    sectionB();

    function sectionA() {
        var $apartmentsSectionA = $(".apartments_info--section-a");

        $(".apartments_info").hide();
        $(".choose_room--section-b").hide();
        $apartmentsSectionA.show();
        var $allRooms = $apartmentsSectionA.find(".room");
        var $allFlats = $allRooms.find(".flat");

        var $btnSectionA = $(".choose_section__btn--a");

        $allRooms.css("display", "none");
        $allFlats.css("display", "none");

        $btnSectionA.addClass("section-active").siblings().removeClass("section-active");
        $(".choose_room--section-a").css("display", "block");
        $allRooms.eq(0).show();

        var $btnAllRoomsA = $(".choose_room--section-a").find(".apartments__topline__rooms").children();
        $btnAllRoomsA.eq(0).addClass("room-active");
        $allRooms.eq(0).find(".flat_section_1_type1").show();

        $allRooms.eq(0).find(".flat_section_1_type1").find(".info__type").each(function () {
            $(this).on("click", function () {
                if ($(this).attr("data-type") == "type1") {
                    return
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
                    return
                }
            });
        });

        $btnAllRoomsA.each(function (roomIdx) {
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
                                return
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
                                return
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
                                return
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
                                return
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
                                return
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
                                return
                            }
                        });
                    });
                }
            });
        });
    }

    function sectionB() {
        var $apartmentsSectionB = $(".apartments_info--section-b");
        $(".apartments_info").hide();
        $(".choose_room--section-a").hide();
        $apartmentsSectionB.show();
        var $allRooms = $apartmentsSectionB.find(".room");
        var $allFlats = $allRooms.find(".flat");

        var $btnSectionB = $(".choose_section__btn--b");

        $allRooms.css("display", "none");
        $allFlats.css("display", "none");

        $btnSectionB.addClass("section-active").siblings().removeClass("section-active");
        $(".choose_room--section-b").css("display", "block");
        $allRooms.eq(0).show();

        var $btnAllRoomsB = $(".choose_room--section-b").find(".apartments__topline__rooms").children();
        $btnAllRoomsB.eq(0).addClass("room-active");
        $allRooms.eq(0).find(".flat_section_1_type1").show();

        $allRooms.eq(0).find(".flat_section_1_type1").find(".info__type").each(function () {
            $(this).on("click", function () {
                if ($(this).attr("data-type") == "type1") {
                    return
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
                    return
                }
            });
        });

        $btnAllRoomsB.each(function (roomIdx) {
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
                                return
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
                                return
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
                                return
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
                                return
                            }
                        });
                    });
                } else if ($(this).attr("data-room") == "room4") {

                    $(this).addClass("room-active").siblings().removeClass("room-active");
                    $allRooms.eq(roomIdx).show().siblings().hide();
                    $allRooms.eq(roomIdx).children().hide();
                    $allRooms.eq(roomIdx).children().eq(0).show();

                    $allRooms.eq(roomIdx).find(".flat_section_1_type1").find(".info__type").each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("data-type") == "type1") {
                                return
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
                                return
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
                                return
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
                                return
                            }
                        });
                    });
                }
            });
        });
    }

};

$(".apartment_layout").on("click", function () {
    $(".flat_modal").show();
    $(".flat_modal__close").on("click", function () {
        $(".flat_modal").hide();
    });
});