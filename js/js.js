$(document).ready(function() {

	var player = 1;

   $(".squares").on('click', function(event){

      // alert("working");
      
      var squareSelected = $(this);

      if(squareSelected.hasClass("X") || squareSelected.hasClass("O")) {
      	alert("This square has already been selected! Choose another one :-).")
      } else {

      	if (player === 1) {
      		squareSelected.addClass("X");
      		player = 2;

        } else {
        	squareSelected.addClass("O");
        	player = 1;
        }

      }


   });



});