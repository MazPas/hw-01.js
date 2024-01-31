const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

// Запит паролю через prompt
const userPassword = prompt('Будь ласка, введіть пароль для авторизації:');

// Перевірка умов
if (userPassword === null) {
    message = 'Операцію скасовано!';
} else if (userPassword === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонено, невірний пароль!';
}

// Виведення результату в alert
alert(message);
