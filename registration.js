// registration.js

function openRegistrationModal() {
    var modal = document.getElementById('registrationModal');
    modal.style.display = 'block';
}

function closeRegistrationModal() {
    var modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
}

function openLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'block';
}

function closeLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}

function registerUser() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

    // В реальном приложении отправляйте данные на сервер для обработки и сохранения в базе данных.
    // Здесь просто сохраним данные в localStorage.

    localStorage.setItem('username', regUsername);
    localStorage.setItem('password', regPassword);

    console.log('Пользователь зарегистрирован:');
    console.log('Имя пользователя:', regUsername);
    console.log('Пароль:', regPassword);

    closeRegistrationModal();
}

function loginUser() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // В реальном приложении отправляйте данные на сервер для проверки и аутентификации.
    // Здесь просто сравним данные с теми, что сохранены в localStorage.

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        console.log('Вход выполнен успешно!');
        closeLoginModal();
        openUserProfile();
    } else {
        console.log('Ошибка входа. Проверьте имя пользователя и пароль.');
    }
}

function openUserProfile() {
    var storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        alert('Добро пожаловать, ' + storedUsername + '!');
    } else {
        alert('Пожалуйста, войдите для доступа к личному кабинету.');
    }
}

