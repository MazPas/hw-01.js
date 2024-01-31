const country = prompt('Введіть країну доставки:').toLowerCase(); // Перетворення на нижній регістр

let shippingCost;

switch (country) {
    case 'китай':
        shippingCost = 100;
        break;
    case 'чилі':
        shippingCost = 250;
        break;
    case 'австралія':
        shippingCost = 170;
        break;
    case 'індія':
        shippingCost = 80;
        break;
    case 'ямайка':
        shippingCost = 120;
        break;
    default:
        alert('В вашій країні доставка не доступна');
        break;
}

if (shippingCost !== undefined) {
    alert(`Доставка в ${country} буде коштувати ${shippingCost} кредитів.`);
}
