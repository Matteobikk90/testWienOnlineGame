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
      		if(checkIfPlayerWon('X')) {
      			alert('Congratulation! Player ' + player + ' has won!');

      		} else {

      		player = 2;
          
          }

        } else {
        	squareSelected.addClass("O");
        	if (checkIfPlayerWon('O')) {
        		alert('Congratulation! Player ' + player + ' has won!');
        	}

        	player = 1;
        }

      }


    });


   function checkIfPlayerWon(symbol) {

      if($('#1').hasClass(symbol) && $('#2').hasClass(symbol) && $('#3').hasClass(symbol)) {
        
        return true;

      } else if ($('#4').hasClass(symbol) && $('#5').hasClass(symbol) && $('#6').hasClass(symbol)) {

        return true;

      } else if ($('#7').hasClass(symbol) && $('#8').hasClass(symbol) && $('#9').hasClass(symbol)) {

        return true; 

      } else if ($('#1').hasClass(symbol) && $('#5').hasClass(symbol) && $('#9').hasClass(symbol)) {

        return true;

      } else if ($('#3').hasClass(symbol) && $('#5').hasClass(symbol) && $('#7').hasClass(symbol)) {

        return true;

      } else if ($('#1').hasClass(symbol) && $('#4').hasClass(symbol) && $('#7').hasClass(symbol)) {

        return true;

      } else if ($('#2').hasClass(symbol) && $('#5').hasClass(symbol) && $('#8').hasClass(symbol)) {

        return true;

      } else if ($('#3').hasClass(symbol) && $('#6').hasClass(symbol) && $('#9').hasClass(symbol)) {

      } else {

      	return false;
      }



   }


   $("button").click(function() {
	document.location.href="";

});
 


});



