// Generazione numero random
function randomNumberGen(min, max) {
	var randomNumber = Math.floor((Math.random() * max + min) - min);
	return randomNumber;
}


var simonNumbers = [];
var userNumbers = [];

// Alert con i numeri random
for (var i = 0; i < 5; i++) {
	simonNumbers.push(randomNumberGen(1, 100));
}
alert('I numeri sono: ' + simonNumbers);

// Input utente
setTimeout(function() {
	for (var p = 0; p < simonNumbers.length; p++) {
		var userNumber = parseInt(prompt('Inserisci il ' + (p + 1) + ' numero che hai visto'));
		if (isNaN(userNumber)) {
			alert('Non hai inserito un numero');
			p = p - 1;
		} else {
			userNumbers.push(userNumber);
		}
	}
}, 2000);
