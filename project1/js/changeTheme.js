$(function() {
    $("#darkButton").on('click', setDark);

    function setDark() {
        if ($("#body").hasClass("bodyLight")) {
            $("#body").removeClass("bodyLight");
        }

        if ($("#header").hasClass("header")) {
            $("#header").removeClass("header");
        }
        if ($("#menu1").hasClass("menu")) {
            $("#menu2").removeClass("menu");
        }
        if ($("#menu2").hasClass("menu")) {
            $("#menu2").removeClass("menu");
        }
        if ($("#footer").hasClass("footer")) {
            $("#footer").removeClass("footer");
        }
        $("#body").addClass("bodyDark");
        $("#header").addClass("headerDark");
        $("#menu1").addClass("menuDark");
        $("#menu2").addClass("menuDark");
        $("#footer").addClass("footerDark");

    }
})