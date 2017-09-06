window.onload = function () {
    // wyszukiwanie celu podrozy , obsluga input1
    function searchTarget(e) {
        e.preventDefault();

        var input1 = $("#odjazdy_input");

        console.log('searchTarget()');


        var x = input1.val();

        // wysylanie 
        $.ajax({
            type: "POST",
            url: "load_input2.php",
            data: {
                input1: x
            },
            success: function (result) {
                console.log(result);
                $('#przyjazdy_input').html(result);
            },

            timeout: 3000,
            error: function (error) {
                alert('nie odnajduje pliku load_input2 , ' + error.message);
            },

        });
        /* co drugie klikniecie dziala (przy rozwinieciu option) 
       if($('#przyjazdy_input').val() !== null){
           document.getElementById('wyslij_form').disabled = false;
       }  */
    }





    // wysylanie formularza do bazy danych
    function sendForm(e) {
        e.preventDefault();
        var form = $('form');
        var input1 = $('#odjazdy_input');
        var input2 = $('#przyjazdy_input');
        // alert(input1.val());
        if (input1.val() == "" || input2.val() == "") {
            alert('nie uzupelniles pola odjazd lub przyjazd');
        } else {

            $.ajax({
                /*  beforeSend: function(){
                       $('.tbl-content').slideUp();
                  }, */
                type: "POST",
                url: "send_form.php",
                data: form.serialize(),
                success: function (result) {


                    console.log(result);
                    $('tbody').html(result);
                    //   $('.tbl-content').slideDown();
                    console.log('nadaje klase showw');

                },
                timeout: 3000,
                error: function (error) {
                    alert('nie odnajduje pliku , ' + error.message);
                },
                complete: function () {
                    console.log('koniec');
                }

            });
        }

    }

    //////////////////


    function LoadInput1() {
        $.ajax({
            url: "load_input1.php",
            success: function (result) {
                var toHtml = '<option default value=""></option>' + result;



                $('#odjazdy_input').html(toHtml);

            },
            timeout: 3000,
            error: function (error) {
                alert('nie zaladowaly sie opcje w input 1 , ' + error.message);
            }


        });
    }


    ///////////////////////////////////////



    // wysylanie formularza
    //odblokowanie okienek 


    LoadInput1();
    $("form").on('click', '#odjazdy_input', searchTarget);
    // $("form").on('click','select',unlock);

    $('.rozkladj').on('submit', 'form', sendForm);


};
