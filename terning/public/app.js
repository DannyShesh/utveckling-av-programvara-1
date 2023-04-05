
var diceResult = document.querySelector('#roll-result');

function rolldice() {
var rollResult = Math.floor(Math.random() * 6) + 1;
diceResult.innerHTML = '<img src="IMG/' + rollResult + '.png">';
}