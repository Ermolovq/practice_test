function handleDeviceShake(event) {
	if(thisCard > 3) return;
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
        getRandomCard(thisCard, chosenCards, cardCondition, cards);
		window.removeEventListener('devicemotion', handleDeviceShake);
		thisCard++;
		checkCards(thisCard);
		setTimeout(function() {
			window.addEventListener('devicemotion', handleDeviceShake);
		}, 1000);
    }
}