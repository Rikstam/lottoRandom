var lottoMoottori = {
    init: function(){

        $('#lotteryRowsGenerator').on('submit', function(e){
            e.preventDefault();



            $('#generateNumbers').toggleClass('spinning');


            $.post("api/numbers", $(this).serialize(), function(data) {


                var html = '';

                $('#rivit').html('');

                if(data){
                $.each(data, function (i, v) {
                    var rownumb = i + 1;
                    html += '<h2 class = "rivinumero">Rivi <span class = "rowNumb">' + rownumb + '</span></h2>';
                    html += ' <ul class = "numbers">';

                    v.numbers.forEach(function (value, index) {

                        console.log(value);
                        html += '<li>' + value + '</li>';
                    });

                    html += ' </ul>';
                });

                $('#rivit').append(html);

            }
                else{
                    sweetAlert("Oops...", "Something went wrong!");
                }

            } );
            $(this).find('input[type=text], input[type=number], textarea').val('');

            setTimeout(function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");}, 1500);

        });

    }
};


$(document).ready(function(){



    lottoMoottori.init();





});
