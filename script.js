async function showSchedule() {
    var scheduleDiv = document.getElementById('courseSchedule');
    var scheduleList = document.getElementById('scheduleList');

    try {
        const response = await fetch('/api/schedule');
        const data = await response.json();

        if (data.length > 0) {
            // Очищаем предыдущее расписание
            scheduleList.innerHTML = "";

            // Отображаем новое расписание
            data.forEach(course => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>Курс ${course.course}:</strong> ${course.schedule}`;
                scheduleList.appendChild(li);
            });

            scheduleDiv.style.display = 'block';
        } else {
            // Иначе добавляем заглушку
            scheduleList.innerHTML = "<li>Расписание не найдено.</li>";
            scheduleDiv.style.display = 'block';
        }
    } catch (error) {
        console.error('Ошибка при загрузке расписания:', error);
    }
}

async function saveSchedule() {
    var scheduleList = document.getElementById('scheduleList');
    var courses = [];

    // Извлекаем данные из отображенного расписания
    scheduleList.childNodes.forEach(li => {
        const courseNumber = li.innerHTML.match(/(\d+)/);
        const schedule = li.innerHTML.match(/<strong>.*<\/strong>(.*)/)[1];
        
        if (courseNumber && schedule) {
            courses.push({ course: courseNumber[0], schedule });
        }
    });

    try {
        // Отправляем данные на сервер для сохранения
        const response = await fetch('/api/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courses),
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Ошибка при сохранении расписания:', error);
    }
