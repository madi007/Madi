// registration.js

// Импортируем функции из user.js
document.write('<script src="user.js"></script>');

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

    // Используем функцию из user.js для регистрации пользователя
    registerUser(regUsername, regPassword);

    console.log('Пользователь зарегистрирован:');
    console.log('Имя пользователя:', regUsername);
    console.log('Пароль:', regPassword);

    closeRegistrationModal();
    openUserProfile();
}

function loginUser() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Используем функцию из user.js для входа пользователя
    if (loginUser(loginUsername, loginPassword)) {
        console.log('Вход выполнен успешно!');
        closeLoginModal();
        openUserProfile();
    } else {
        console.log('Ошибка входа. Проверьте имя пользователя и пароль.');
    }
}

function openUserProfile() {
    if (isLoggedIn()) {
        var currentUser = getCurrentUser();
        alert('Добро пожаловать, ' + currentUser.username + '!');
    } else {
        alert('Пожалуйста, войдите для доступа к личному кабинету.');
    }
}
