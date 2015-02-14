$(document).ready(function(){

   console.log("moi") ;

    $('#lotteryRowsGenerator').on('submit', function(e){
        e.preventDefault();
        console.log($(this).serialize());
        $.post("api/numbers", $(this).serialize(), function(data){

            console.log(data);

            $.each(data, function(i,v){


            });

        } );

    });

   // $.getJSON( "api/numbers", function( data ) {

     //   console.log(data);
    //});


});
