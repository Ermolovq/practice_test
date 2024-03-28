let lastShakeTime = Date.now();
const shakeInterval = 3000;
let i = 0;

function handleDeviceShake(event) {
	if(i > 2) return;
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
    if (magnitude > threshold && (Date.now() - lastShakeTime) > shakeInterval) {
        i = getRandomCard(i); // Викликаємо функцію для отримання випадкової карти
		lastShakeTime = Date.now();
    }
}

// Додаємо прослуховувач події "devicemotion" для виклику функції при трясці телефона
window.addEventListener('devicemotion', handleDeviceShake);