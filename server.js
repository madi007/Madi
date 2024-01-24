const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Генерация случайного токена
const generateToken = () => Math.random().toString(36).substring(2, 15);

// Простой массив для хранения токенов и связанных с ними данных
const tokenStore = [];

// Настройка транспорта электронной почты с использованием nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // Замените на вашу электронную почту
        pass: 'your-password'         // Замените на ваш пароль
    }
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Генерация уникального токена
    const token = generateToken();

    // Сохранение токена и данных пользователя
    tokenStore.push({ token, username, email, password });

    // Отправка электронного письма с токеном
    const mailOptions = {
        from: 'Baimurzajanmyrza@gmail.com', // Замените на вашу электронную почту
        to: email,
        subject: 'Подтверждение регистрации',
        text: `Пожалуйста, подтвердите вашу регистрацию, перейдя по следующей ссылке: http://localhost:${port}/confirm/${token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка отправки электронного письма' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Регистрация успешна. Проверьте свой электронный ящик для подтверждения.' });
        }
    });
});

// Обработка запроса подтверждения
app.get('/confirm/:token', (req, res) => {
    const token = req.params.token;
    const user = tokenStore.find(entry => entry.token === token);

    if (user) {
        // Выполняйте здесь дополнительные действия по подтверждению, например, сохранение в базе данных
        // Также можно добавить страницу с подтверждением вместо простого текстового ответа
        res.send('Регистрация подтверждена!');
    } else {
        res.status(404).send('Неверный токен подтверждения.');
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
