$(document).ready(function () {

    var mask = '(111) 111-11-11'; // Задаем маску

    $(".registration_list a").click(function () {
        $(".registration_list a").css({
            "background-color": "transparent", "color": "#ffffff"
        });
        $(this).css({ "background-color": "#ffffff", "color": "#56599c" });

    });

    $(".login_btn .btn_1").click(function () {
        $(".footer").css({
            "margin-top": "70px"
        })
        $(".login_form").fadeOut(500);
        setTimeout(function () {
            $(".registration_form").fadeIn(500);
        }, 550);

    });
    $(".registration_form .btn_registration_1").click(function () {
        $(".footer").css({
            "margin-top": "165px"
        })
        $(".registration_form").fadeOut(500);

        setTimeout(function () {
            $(".login_form").fadeIn(550);
        }, 500);
    });

    $(".registration_list a").click(function () {
        $(".registration_list a").removeClass("gender_checked");
        $(this).addClass("gender_checked");
    })

    //Initial Image hiding
    $('.fa').css('color', 'transparent');

    //Validate Functions
    function validateEmail(em) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(em);
    };
    function validateName(n) {
        var nr = /.[a-zA-Z]+$/;
        return nr.test(n);
    };

    //Actions
    $('#first_name').on("change blur", function () {
        var n = $('#first_name').val();
        if (validateName(n) || n.length == 0) {
            $('.pn').css('color', 'transparent');
            $('.fn').css('color', '#c44');
            $('#first_name').css('border', '1px solid red');
        }
        else {
            $('.pn').css('color', '#2c2');
            $('.fn').css('color', 'transparent');
            $('#first_name').css('border', '1px solid transparent');
        }
    });

    function onlyNumbers(target) {
        var newVal = $(target).val();
        if (isNaN(newVal)) {
            var setedValue = newVal.replace(/[^a-zA-Z.]/g, "");
            $(target).val(setedValue);
        }
        else {
            var setedValue = newVal.replace(/[^a-zA-Z.]/g, "");
            $(target).val(setedValue);
        }
    }

    $('#first_name').on("focus", function () {
        var firstNameInput = document.querySelector('#first_name')
        firstNameInput.addEventListener('input', function (event) {
            onlyNumbers('#first_name');
        })
        firstNameInput.addEventListener('keyup', function (event) {
            var n = $('#first_name').val();
            if (n.length > 0) {
                $('.pn').css('color', '#2c2');
                $('.fn').css('color', 'transparent');
                $('#first_name').css('border', '1px solid transparent');
            }
            else {
                $('.pn').css('color', 'transparent');
                $('.fn').css('color', '#c44');
                $('#first_name').css('border', '1px solid red');
            }

        })
    })


    $('#last_name').on("focus", function () {
        var lastNameInput = document.querySelector('#last_name')
        lastNameInput.addEventListener('input', function (event) {
            onlyNumbers('#last_name');
        })
        lastNameInput.addEventListener('keyup', function (event) {
            var n = $('#last_name').val();
            if (lastNameInput.value.length > 0) {
                $('.pp').css('color', '#2c2');
                $('.ff').css('color', 'transparent');
                $('#last_name').css('border', '1px solid transparent');
            }
            else {

                $('.pp').css('color', 'transparent');
                $('.ff').css('color', '#c44');
                $('#last_name').css('border', '1px solid red');
            }

        })
    })
    $('#last_name').on("change blur", function () {
        var l = $('#last_name').val();
        if (!validateName(l) || l.length == 0) {
            $('.pp').css('color', 'transparent');
            $('.ff').css('color', '#c44');
            $('#last_name').css('border', '1px solid red');
            console.log(l)
        }
        else {
            $('.pp').css('color', '#2c2');
            $('.ff').css('color', 'transparent');
            $('#last_name').css('border', '1px solid transparent');
            console.log(l)
        }
    })


    $('#email').on("focus", function () {
        var emailInput = document.querySelector('#email')
        emailInput.addEventListener('keyup', function (event) {
            var em = $('#email').val();
            if (!validateEmail(em) || em.length == 0) {

                $('.pe').css('color', 'transparent');
                $('.fe').css('color', '#c44');
                $('#email').css('border', '1px solid red');
            }
            else {

                $('.pe').css('color', '#2c2');
                $('.fe').css('color', 'transparent');
                $('#email').css('border', '1px solid transparent');

            }

        })
    })

    $('#email').on("change blur", function () {
        var em = $('#email').val();
        if (!validateEmail(em) || em.length == 0) {
            $('.pe').css('color', 'transparent');
            $('.fe').css('color', '#c44');
            $('#email').css('border', '1px solid red');

        }
        else {
            $('.pe').css('color', '#00cc00');
            $('.fe').css('color', 'transparent');
            $('#email').css('border', '1px solid transparent');

        }
    });


    $('#password').on("change blur", function () {
        var pa = $('#password').val();
        if (pa.length >= 6 && pa.length <= 100) {
            $('.pi').css('color', '#00cc00');
            $('.ip').css('color', 'transparent');
            $('#password').css('border', '1px solid transparent');
        }
        else {
            $('.pi').css('color', 'transparent');
            $('.ip').css('color', '#c44');
            $('#password').css('border', '1px solid red');
        }
    });
    $('#password').on("focus", function () {
        var pa = $('#password').val();
        var passwordInput = document.querySelector('#password')
        passwordInput.addEventListener('keyup', function (event) {

            if (passwordInput.value.length >= 6 && passwordInput.value.length <= 100) {
                $('.pi').css('color', '#00cc00');
                $('.ip').css('color', 'transparent');
                $('#password').css('border', '1px solid transparent');
                console.log(passwordInput.value.length)
            }
            else {
                $('.pi').css('color', 'transparent');
                $('.ip').css('color', '#c44');
                $('#password').css('border', '1px solid red');
            }
        })
    })


    $('#repeat_password').on("change blur", function () {
        var pa = $('#password').val();
        var rpa = $('#repeat_password').val();
        if (rpa.length >= 6 || rpa.length <= 100) {
            if (rpa == pa && rpa.length >= 6) {
                $('.pir').css('color', '#00cc00');
                $('.rip').css('color', 'transparent');
                $('#repeat_password').css('border', '1px solid transparent');
            } else {
                $('.pir').css('color', 'transparent');
                $('.rip').css('color', '#c44');
                $('#repeat_password').css('border', '1px solid red');
            }
        }
        else {
            $('.pir').css('color', '#00cc00');
            $('.rip').css('color', 'transparent');
            $('#repeat_password').css('border', '1px solid transparent');
        }
    });

    $('#repeat_password').on("focus", function () {
        var pa = $('#repeat_password').val();
        var rpa = $('#repeat_password').val();
        var passwordInput = document.querySelector('#password')
        var reppasswordInput = document.querySelector('#repeat_password')
        reppasswordInput.addEventListener('keyup', function (event) {

            if (reppasswordInput.value.length >= 6 && reppasswordInput.value.length <= 100) {
                if (passwordInput.value == reppasswordInput.value) {
                    $('.pir').css('color', '#00cc00');
                    $('.rip').css('color', 'transparent');
                    $('#repeat_password').css('border', '1px solid transparent');
                } else {
                    $('.pir').css('color', 'transparent');
                    $('.rip').css('color', '#c44');
                    $('#repeat_password').css('border', '1px solid red');
                }
            }
            else {
                $('.pir').css('color', 'transparent');
                $('.rip').css('color', '#c44');
                $('#repeat_password').css('border', '1px solid red');
            }
        })
    })

    $(".phone").on("change blur", function () {
        var ph = $(".phone").val();
        if (ph.length != 0) {
            $('.zzz').css('color', '#00cc00');
            $('.vvv').css('color', 'transparent');
            $('.phone').css('border', '1px solid transparent');
        }
        else {
            $('.zzz').css('color', 'transparent');
            $('.vvv').css('color', '#c44');
            $('.phone').css('border', '1px solid red');
        }
    })

    $(".phone").on("focus", function () {
        phoneInput.addEventListener('keyup', function (event) {
            if (phoneInput.value.length == mask.length) {
                $('.zzz').css('color', '#00cc00');
                $('.vvv').css('color', 'transparent');
                $('.phone').css('border', '1px solid transparent');
            }
            else {
                $('.zzz').css('color', 'transparent');
                $('.vvv').css('color', '#c44');
                $('.phone').css('border', '1px solid red');
            }
        })
    })
    var phoneInput = document.querySelector('.phone')
    phoneInput.addEventListener('keydown', function (event) {

        if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }


        if (/[0-9\+\ \-\(\)]/.test(event.key)) {
            // Здесь начинаем сравнивать this.value и mask
            // к примеру опять же
            var currentString = this.value;
            var currentLength = currentString.length;
            if (/[0-9]/.test(event.key)) {
                if (mask[currentLength] == '1') {
                    this.value = currentString + event.key;
                    if (this.value.length == mask.length) {
                        $('.zzz').css('color', '#00cc00');
                        $('.vvv').css('color', 'transparent');
                        $('.phone').css('border', '1px solid transparent');
                    }
                    else {
                        $('.zzz').css('color', 'transparent');
                        $('.vvv').css('color', '#c44');
                        $('.phone').css('border', '1px solid red');
                    }
                } else {
                    for (var i = currentLength; i < mask.length; i++) {
                        if (mask[i] == '1') {
                            this.value = currentString + event.key;
                            break;
                        }
                        currentString += mask[i];
                    }
                }
            }
        }
    });

    $("#registration__btn").click(function () {
        var gender_checked = $(".gender_checked").val();
        var n = $('#first_name').val();
        var l = $('#last_name').val();
        var em = $('#email').val();
        var ph = $(".phone").val();
        var phoneInput = document.querySelector('.phone')
        var pa = $('#password').val();
        var rpa = $('#repeat_password').val();
        if ((n.length > 1) && (l.length > 1) && validateEmail(em) && ph.length == mask.length && pa.length == rpa.length && ($("a").hasClass("gender_checked"))) {
            alert("tebrikler");
        }
        else {
            alert("qeydiyyat alinmadi");
        }
    });

});


