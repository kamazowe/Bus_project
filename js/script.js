$(document).ready(function () {

    // btn jedziemy

    $('.btn-rusz').click(function () {
        $('html, body').animate({
            scrollTop: $("#aktualnosci").offset().top - 50
        }, 2000);
    });
});

//};
//(function () {
//    let btn = document.querySelector('.btn-rusz');
//    let stop = document.querySelector('#aktualnosci').offsetTop;
//    let obj = window;
//
//    // stop - do ilu px ma przewijac
//    //obj obiekt do skrolowanie
//    btn.addEventListener('click', function (e) {
//        e.preventDefault();
//        console.log(`klik`);
//        scrolled(stop, obj);
//    }, false);
//
//    function scrolled(stop, obj) {
//
//        let it = setInterval(function () {
//            let pos = Math.round(obj.scrollY);
//            if (stop <= pos) {
//                console.log('wylaczono');
//                window.clearInterval(it);
//            }
//
//            scroll(stop, obj, pos);
//        }, 20);
//
//
//
//        function scroll(stop, obj, pos) {
//
//            if (pos <= stop - 5) {
//                obj.scrollBy(0, 5);
//            } else if (pos < stop) {
//                obj.scrollBy(0, stop - pos);
//            }
//
//        }
//    }
//
//})();
