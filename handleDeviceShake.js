const chosenCards = [];
let currentCard = 0;

function handleDeviceShake(event) {
	if(currentCard > 2) return;
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
    const threshold = 50; // Порогове значення для визначення тряски
    if (magnitude > threshold) {
        getRandomCard(currentCard, chosenCards); // Викликаємо функцію для отримання випадкової карти
		currentCard++;
    }
}