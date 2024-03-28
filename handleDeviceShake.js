let lastShakeTime = Date.now();
const shakeInterval = 1000;
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
    const threshold = 50; // Порогове значення для визначення тряски
    if (magnitude > threshold && (Date.now() - lastShakeTime) > shakeInterval) {
        getRandomCards(); // Викликаємо функцію для отримання випадкових карт
		lastShakeTime = Date.now();
    }
}

// Додаємо прослуховувач події "devicemotion" для виклику функції при трясці телефона
window.addEventListener('devicemotion', handleDeviceShake);