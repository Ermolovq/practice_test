const down = document.getElementById('down');
const down_button = document.createElement('button');
down.style.backgroundСolor = "rgba(100, 100, 100, 0.3)";
if (device == "desktop") {
	down_button.innerHTML = "<p>Отримати картку</p>";
	down_button.onclick = function() {
		getRandomCard(thisCard, chosenCards, cardCondition, cards);
		thisCard++;
		checkCards(thisCard);
	}
} else if (device == "phone") {
	down_button.innerText = "Розпочати";
	down_button.onclick = function() {
		checkIOS();
	}
}
down.appendChild(down_button);