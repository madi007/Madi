const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let courseSchedule = [
    { course: 1, schedule: 'Понедельник, Среда - 10:00-12:00' },
    { course: 2, schedule: 'Вторник, Четверг - 14:00-16:00' },
    { course: 3, schedule: 'Среда, Пятница - 12:00-14:00' },
    { course: 4, schedule: 'Понедельник, Четверг - 16:00-18:00' },
];

app.use(express.static('public'));
app.use(express.json());

app.get('/api/schedule', (req, res) => {
    res.json(courseSchedule);
});

app.post('/api/schedule', (req, res) => {
    courseSchedule = req.body;
    res.json({ message: 'Расписание сохранено' });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
 
