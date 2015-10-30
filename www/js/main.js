$(document).ready(function () {
    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // contact form
    $("#contactsform").submit(function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit-contacts").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contacts-form-name").val(),
                email: $("#contacts-form-email").val(),
                phone: $("#contacts-form-phone").val(),
                comments: $("#contacts-form-message").val()
            }, function (a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit-contacts").removeAttr("disabled");
                if (null != a.match("success")) $("#contactsform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactsform input, #contactsform textarea").keyup(function () {
        $("#message").slideUp(1500);
    });

    //menu scrolling
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 64}, 1000);
    });

    //drop-down-menu-food
    $(".menu-food").on("click", function () {
        var $menuList=$(".menu-food-list");
        if ($menuList.hasClass("menu-food-list-closed")) {
            $menuList.removeClass("menu-food-list-closed");
            $menuList.show().stop().animate({top: "0px"}, 1000,
                function () {
                    var rotation = function () {
                        $(".menu-food-list-close").rotate({
                            angle: 0,
                            animateTo: 360
                        });
                    };
                    rotation();
                });
        } else {
            $menuList.addClass("menu-food-list-closed");
            $menuList.stop().animate({top: "960px"}, 1000,function(){
                $menuList.hide();
            });
        }
    });
});

