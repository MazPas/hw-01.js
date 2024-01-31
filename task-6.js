let input;
let total = 0;

while (true) {
    input = prompt('Введіть число:');

    if (input === null) {
        break; // Вихід з циклу при натисканні Cancel
    }

    const number = Number(input);

    if (!isNaN(number)) {
        // Якщо введено число, додаємо його до загальної суми
        total += number;
    } else {
        alert('Було введено не число, спробуйте ще раз.');
    }
}

alert(`Загальна сума чисел дорівнює ${total}`);
