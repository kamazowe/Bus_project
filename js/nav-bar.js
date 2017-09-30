(function () {
    var whichTransitionEvent = function () {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };


    // navigation toggle

    $('.navigation-toggle , .navigation ul li a ').on('click', function () {

        $('body').toggleClass('navigation-show');


        $('.page-main, .navigation').addClass('anim').each(function () {
            var transitionEnd = whichTransitionEvent();
            $(this).on(transitionEnd, function () {
                $(this).removeClass('anim');
            });
        });



    });


    var toggle = 0;
    $('.navigation-toggle').click(function () {


        if (toggle == 0) {


            $('.navigation-toggle').animate({
                //deg: '359',
                opacity: '0.8'
            }, "slow");

            $('.navigation-toggle span:nth-child(1)').animate({
                top: '14px'
            }, "slow");

            $('.navigation-toggle span:nth-child(3)').animate({
                top: '-14px'
            }, "slow");
            toggle = 1;
        } else if (toggle == 1) {
            $('.navigation-toggle').animate({
                rotate: '-30deg',
                opacity: '1'
            }, "slow");
            console.log('pobieranie toggle2 ' + toggle);
            $('.navigation-toggle span:nth-child(1)').animate({
                top: '0px'
            }, "slow");

            $('.navigation-toggle span:nth-child(3)').animate({
                top: '0px'
            }, "slow");
            toggle = 0;
        }
    });



    // plynne przewijanie
    $('.navigation ul li a[href^="#"]').click(function () {
        var width = $(document).width();
        console.log(width);
        var hash = $(this).attr('href');
        var target = function () {
            if (width > 720) {
                return $(hash).offset().top - 50;
            } else {
                return $(hash).offset().top;
            }
        };
        $('html, body').animate({
            scrollTop: target()



        }, 1500);
        return false;
    });


})();
