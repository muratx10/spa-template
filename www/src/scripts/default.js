jQuery(function ($) {

    var $menubar = $('.menubar');
    var $menuTop = $menubar.offset().top;
    var body = $('html, body');
    var $logo = $('.logo_link');
    var $mainMenu = $('.menubar__main-menu');
    var $feedbackBtn = $('#feedback-button');
    var $modalWindow = $('.modal-block');
    var $feedbackModalWindow = $('#modal-window-feedback');
    var $callBackModalWindow = $('#modal-window-callback');
    var $closeModalBtn = $('.close-btn');
    var $submitModalBtn = $('#submit-btn');
    var $toTop = $('.to-top');
    var $callBackBtn = $('#callBackButton');
    var $datePick = $('#date-picker');
    var $onlineRegBtn = $('.onlineRegButton');
    var $onlineRegModalWindow = $('#modal-window-onlineReg');
    var windowWidth = $(window).width();
    var $burgerMenuBtn = $('#burgerMenuBox');
    var $acceptPrvcBtn = $('#accept-privacy-btn');
    var $privacyChkBox = $('.privacy-checkbox');
    var $acceptBtn = $('.accept-btn');




    $privacyChkBox.click(function () {
        $acceptBtn.toggle(this.checked);
    });

    $acceptPrvcBtn.on('click', function (event) {
        event.preventDefault();
        $acceptBtn.removeClass('checked-input');
        $.alert({
            title: '',
            content: 'Вы успешно записались на прием со скидкой в 10%.'
        });
    });


    //-------MODAL WINDOW----------

    $feedbackBtn.on('click', function (event) {
        event.preventDefault();
        $feedbackModalWindow.addClass('modal-show');
    });

    $callBackBtn.on('click', function (event) {
        event.preventDefault();
        $callBackModalWindow.addClass('modal-show');
    });

    $onlineRegBtn.on('click', function (event) {
        event.preventDefault();
        $onlineRegModalWindow.addClass('modal-show');
    });

    $closeModalBtn.on('click', function (event) {
        event.preventDefault();
        $modalWindow.removeClass('modal-show');
    });

    $('.submitCallback').on('click', function (event) {
        event.preventDefault();
        $modalWindow.removeClass('modal-show');
        $.alert({
            title: '',
            content: 'Ваша заявка на звонок принята. Наш оператор с Вами свяжется в указанное Вами время.'
        });
    });

    $('.submitOnlinReg').on('click', function (event) {
        event.preventDefault();
        $modalWindow.removeClass('modal-show');
        $.alert({
            title: '',
            content: 'Вы успешно записались на прием. Ждём Вас!'
        });
    });

    $submitModalBtn.on('click', function () {
        $feedbackModalWindow.removeClass('modal-show');
        $.alert({
            title: '',
            content: 'Спасибо за отзыв! Ваш отзыв будет опубликован на сайте после проверки модератором.'
        });

    });


    //----------SLICK SLIDER-----------

    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
    });


    $('.feedback').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.service-info__img').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        slidesToShow: 1,
    });


    //--------TO TOP--------

    $toTop.on('click', function (event) {
        event.preventDefault();
        body.animate({scrollTop: 0}, 800);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $toTop.addClass('to-top-show');
        }
        else if ($(window).scrollTop() < 800) {
            $toTop.removeClass('to-top-show');
        }
    });

    $('.timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '9',
        maxTime: '7:00pm',
        defaultTime: '11',
        startTime: '09:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $datePick.daterangepicker({
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        },
        "singleDatePicker": true,
        "linkedCalendars": false,
        "showCustomRangeLabel": true,
        "startDate": "28/05/2018",
        "endDate": "31/08/2018",
        "minDate": "28/05/2018",
        "maxDate": "31/08/2018"
    });


    $burgerMenuBtn.on('click', function () {

        if ($mainMenu.is(':visible')) {
            $mainMenu.slideUp('normal');
        }

        if (!$mainMenu.is(':visible')) {
            $mainMenu.slideDown('normal');
        }
    });

    //var $menuWithSubmenu = $('li:has(> ul)');

    //$(window).resize(function () {
    if ($(window).width() < 768) {
        //$mainMenu.hide();

        $('.menubar__main-menu__link').click(function () {

            var checkElement = $(this).next();


            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                $(this).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }

            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('.menubar ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }

            if (checkElement.is('ul')) {
                return false;
            } else {
                return true;
            }
        });
    }

    //});
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $mainMenu.show();
        }
        else if ($(window).width() < 768) {
            $mainMenu.hide();
        }

    });

    $('a[data-rel^=lightcase]').lightcase();


});
















