// registration.js

function openRegistrationModal() {
    var modal = document.getElementById('registrationModal');
    modal.style.display = 'block';
}

function closeRegistrationModal() {
    var modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
}

function registerUser() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

    // В реальном приложении отправляйте данные на сервер для обработки и сохранения в базе данных.
    // Здесь просто выведем информацию в консоль.

    console.log('Пользователь зарегистрирован:');
    console.log('Имя пользователя:', regUsername);
    console.log('Пароль:', regPassword);

    // Закрываем модальное окно после регистрации
    closeRegistrationModal();
}
