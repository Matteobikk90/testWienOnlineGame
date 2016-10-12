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
      			$('#winner').text('Rapid Wien Wins');

      		} else {

      		player = 2;
          
          }

        } else {
        	squareSelected.addClass("O");
        	if (checkIfPlayerWon('O')) {
        		$('#winner').text('Austria Wien Wins');

        	} else {

        	player = 1;

          }

        }

    }


});

   // Check Combinations


   function checkIfPlayerWon(symbol) {

      if($('#sq1').hasClass(symbol) && $('#sq2').hasClass(symbol) && $('#sq3').hasClass(symbol)) {
        
        return true;

      } else if ($('#sq4').hasClass(symbol) && $('#sq5').hasClass(symbol) && $('#sq6').hasClass(symbol)) {

        return true;

      } else if ($('#sq7').hasClass(symbol) && $('#sq8').hasClass(symbol) && $('#sq9').hasClass(symbol)) {

        return true; 

      } else if ($('#sq1').hasClass(symbol) && $('#sq5').hasClass(symbol) && $('#sq9').hasClass(symbol)) {

        return true;

      } else if ($('#sq3').hasClass(symbol) && $('#sq5').hasClass(symbol) && $('#sq7').hasClass(symbol)) {

        return true;

      } else if ($('#sq1').hasClass(symbol) && $('#sq4').hasClass(symbol) && $('#sq7').hasClass(symbol)) {

        return true;

      } else if ($('#sq2').hasClass(symbol) && $('#sq5').hasClass(symbol) && $('#sq8').hasClass(symbol)) {

        return true;

      } else if ($('#sq3').hasClass(symbol) && $('#sq6').hasClass(symbol) && $('#sq9').hasClass(symbol)) {

        return true;

      } else {

      	return false;

      }



   }


   // Restart Button 


   $("button").click(function() {
	document.location.href="";

   });


   // Sound Manager

   soundManager.setup({
   url: 'js/soundmanager/swf',
   flashVersion: 9, 
   onready: function() {
   
var playButton = $(".squares");
playButton.on("click" , function(event) {

var mySound = soundManager.createSound({
     "id": 'ballSnd',
     "url" :"sounds/ball.mp3",

});

   mySound.play(); 

})


}

});



 


});



