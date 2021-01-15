// Generazione numero random
function randomNumberGen(min, max) {
	var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
	return randomNumber;
}


var simonNumbers = [];
var numbersResult = [];
var gameResult = document.getElementById('game-result');

// Alert con i numeri random
for (var i = 0; i < 5; i++) {
	simonNumbers.push(randomNumberGen(1, 100));
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
		if (simonNumbers[p] === userNumber) {
			numbersResult.push(userNumber);
		}
	}
	// Esito partita
	gameResult.innerHTML = 'Hai indovinato <strong> ' + numbersResult.length + '</strong> numeri, ovvero: ' + numbersResult;
}, 30000);
