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
function handleDeviceShake(event) {
    // Отримуємо дані про прискорення з події
    const acceleration = event.accelerationIncludingGravity;

    // Обчислюємо величину прискорення
    const magnitude = Math.sqrt(
        Math.pow(acceleration.x, 2) +
        Math.pow(acceleration.y, 2) +
        Math.pow(acceleration.z, 2)
    );

    // Якщо величина прискорення перевищує певне порогове значення,
    // тоді реагуємо на тряску телефона
    const threshold = 5; // Порогове значення для визначення тряски
    if (magnitude > threshold) {
        getRandomCards(); // Викликаємо функцію для отримання випадкових карт
    }
}

// Додаємо прослуховувач події "devicemotion" для виклику функції при трясці телефона
window.addEventListener('devicemotion', handleDeviceShake);