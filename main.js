$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
    });
});
// Hamburger Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Form Support
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $(".validate-input .input100");
    var input2 = $(".validate-input .input101");

    $(".validate-form").on("submit", function (e) {
        var localInput = input.length == 0 ? input2 : input;
        var check = true;
        for (var i = 0; i < localInput.length; i++) {
            if (validate(localInput[i]) == false) {
                showValidate(localInput[i]);
                e.preventDefault();
                check = false;
            }
        }

        return check;
    });

    $(".validate-form .input100").each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr("type") == "email") {
            if (
                $(input)
                    .val()
                    .trim()
                    .match(
                        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
                    ) == null
            ) {
                return false;
            }
        } else {
            if ($(input).val().trim() == "") {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
    }
})(jQuery);
