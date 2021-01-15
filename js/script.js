// Generazione numero random
function randomNumberGen(min, max) {
	var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
	return randomNumber;
}


var simonNumbers = [];
var userNumbers = [];
var numbersResult = [];
var gameResult = document.getElementById('game-result');

// Alert con i numeri random
while (simonNumbers.length < 5) {
  var randomNumber = randomNumberGen(1, 100);
    simonNumbers.push(randomNumber);
}
alert('I numeri sono: ' + simonNumbers);

setTimeout(function() {
	// Input utente
	for (var p = 0; p < simonNumbers.length; p++) {
		var userNumber = parseInt(prompt('Inserisci il ' + (p + 1) + ' numero che hai visto'));
		if (isNaN(userNumber)) {
			alert('Non hai inserito un numero');
			p--;
		} else if (userNumber < 1 || userNumber > 100) {
			alert('Il numero inserito non è valido');
			p--;
		}
		if (userNumbers.includes(userNumber)) {
			alert('Hai già scelto questo numero');
			p--;
		} else {
			userNumbers.push(userNumber);
		}
		if (simonNumbers[p] === userNumber) {
			numbersResult.push(userNumber);
		}
	}
	// Esito partita
	gameResult.innerHTML = 'Hai indovinato <strong> ' + numbersResult.length + '</strong> numeri, ovvero: ' + numbersResult;
}, 1000);
