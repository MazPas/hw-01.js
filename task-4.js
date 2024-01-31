let credits = 23580;
const pricePerDroid = 3000;

// Запит кількості телевізорів через prompt
const quantityToBuy = prompt('Скільки телевізорів ви хочете купити?');

// Перевірка натискання кнопки Cancel
if (quantityToBuy === null) {
    console.log('Операцію скасовано!');
} else {
    // Розрахунок загальної ціни замовлення
    const totalPrice = pricePerDroid * quantityToBuy;

    // Перевірка можливості оплати замовлення
    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!');
    } else {
        // Оплата та виведення повідомлення про залишок кредитів
        credits -= totalPrice;
        console.log(`Ви купили ${quantityToBuy} телевізорів, на рахунку залишилось ${credits} кредитів.`);
    }
}
