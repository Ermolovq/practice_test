function getRandomCards() {
    const cards = ['images/card_1.png', 'images/card_2.png', 'images/card_3.png', 'images/card_4.png', 'images/card_5.png']; // список доступних карт
    const chosenCards = [];

    // Вибираємо три випадкові карти
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        chosenCards.push(cards[randomIndex]);
    }

    // Встановлюємо вибрані карти на сторінку
    for (let i = 0; i < chosenCards.length; i++) {
        const cardImg = document.getElementById(`card${i + 1}`);
        cardImg.src = chosenCards[i];
    }
}