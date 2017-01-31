function menu() {

    //init
    mobileMenu();
    smoothScroll();


    //functions mobileMenu

    function mobileMenu() {
        var $mobMenuWrap = $(".mb_menu_wrap");
        var $mobMenu = $(".mb_menu");
        var $icon = $(".mb_menu_wrap__icon");
        var $links = $mobMenu.find(".menu__link");
        $mobMenuWrap.on("click", function (e) {
            $(this).addClass("mb_menu_wrap--open");
            $icon.hide();
            $mobMenu.show();

            $links.each(function () {
                $(this).on("click", function (e) {
                    e.stopPropagation();
                    $mobMenu.hide();
                    $icon.show();
                    $mobMenuWrap.removeClass("mb_menu_wrap--open");
                });
            });

        });
    };

    //function smoothScroll 
    function smoothScroll() {
        $(".menu").find("a[href^='#']").on('click', function () {
            var target = $(this).attr("href");
            $(".menu").find("a[href^='#']").removeClass("menu__link--active");
            $(this).addClass("menu__link--active");
            $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        });

        console.log($(".menu").find("a[href^='#']"));
    }
};