function getRandomCard(int i) {
    const cards = ['images/card_1.png', 'images/card_2.png', 'images/card_3.png', 'images/card_4.png', 'images/card_5.png']; // список доступних карт
    chosenCards = [];
	bool = true;

    // Вибираємо випадкову карту
	while (bool) {
		const randomIndex = Math.floor(Math.random() * cards.length);
		if (randomIndex != chosenCards[0] || randomIndex != chosenCards[1]){
			chosenCards[i] = randomIndex;
			bool = false;
		}
	}
    // Встановлюємо вибрану карту на сторінку
	const cardImg = document.getElementById(`card${i + 1}`);
	cardImg.src = chosenCards[i];
	
	return i+1;
}