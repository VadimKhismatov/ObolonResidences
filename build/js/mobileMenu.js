"use strict";

function mobileMenu() {
    var $mobMenuWrap = $(".mb_menu_wrap");
    var $mobMenu = $(".menu_mobile");
    var $icon = $(".mb_menu_wrap__icon");
    var $links = $mobMenu.find(".menu__link");
    $mobMenuWrap.on("click", function (e) {
        $(this).addClass("mb_menu_wrap--open");
        $icon.hide();
        $mobMenu.show();

        $links.each(function () {
            $(this).on("click", function (e) {
                e.stopPropagation();
                $links.removeClass("menu__link--active");
                $(this).addClass("menu__link--active");

                $mobMenu.hide();
                $icon.show();
                $mobMenuWrap.removeClass("mb_menu_wrap--open");
            });
        });
    });
};