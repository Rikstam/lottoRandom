var lottoMoottori = {
    init: function(){

        $('#lotteryRowsGenerator').on('submit', function(e){
            e.preventDefault();

           // if( $('#generateNumbers').hasClass('spinning') ){

             //   $('#generateNumbers').removeClass('spinning');

            //}

            $('#generateNumbers').toggleClass('spinning');

            console.log($(this).serialize());
            $.post("api/numbers", $(this).serialize(), function(data){

                console.log(data);
                var html =  '';

                $('#rivit').html('');
                $.each(data, function(i,v){
                    var rownumb = i + 1;
                    html += '<h2 class = "rivinumero">Rivi <span class = "rowNumb">' + rownumb  + '</span></h2>';
                    html += ' <ul class = "numbers">';

                    v.numbers.forEach(function(value, index){

                        console.log(value);
                        html+= '<li>' + value + '</li>';
                    });

                    html += ' </ul>';
                });

                $('#rivit').append(html);



            } );
            $(this).find('input[type=text], input[type=number], textarea').val('');
            //$('#generateNumbers').removeClass('spinning');
        });

    }
};


$(document).ready(function(){

   console.log("moi") ;

    lottoMoottori.init();





});
