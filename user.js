// user.js

// Функция для регистрации пользователя
function registerUser(username, password) {
    // В реальном приложении отправляйте данные на сервер для обработки и сохранения в базе данных.
    // Здесь просто сохраним данные в localStorage.

    localStorage.setItem('currentUser', JSON.stringify({ username, password }));
}

// Функция для входа пользователя
function loginUser(username, password) {
    // В реальном приложении отправляйте данные на сервер для проверки и аутентификации.
    // Здесь просто сравним данные с теми, что сохранены в localStorage.

    var storedUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
        return true;
    } else {
        return false;
    }
}

// Функция для проверки, авторизован ли пользователь
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Функция для получения текущего пользователя
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Функция для выхода из учетной записи
function logoutUser() {
    localStorage.removeItem('currentUser');
}
