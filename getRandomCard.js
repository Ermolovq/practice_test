function getRandomCard(currentCard, chosenCards) {
    const cards = ['images/card_1.png', 'images/card_2.png', 'images/card_3.png', 'images/card_4.png', 'images/card_5.png']; // список доступних карт
    let bool = true;
	let randomIndex;

    // Вибираємо випадкову карту, перевіряючи, чи вона ще не була вибрана
    while (bool) {
		randomIndex = Math.floor(Math.random() * cards.length);
		if (!chosenCards.includes(randomIndex)) {
			chosenCards.push(randomIndex);
			bool = false;
		}
    }

    // Встановлюємо вибрану карту на сторінку
    const cardImg = document.getElementById(`card${currentCard+1}`);
    cardImg.src = cards[randomIndex]; // використовуємо випадковий індекс для вибору карти з масиву cards
    return randomIndex; // повертаємо індекс наступної карти
}