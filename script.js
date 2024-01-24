async function showSchedule() {
    var scheduleSection = document.getElementById('schedule-section');
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
            scheduleSection.style.display = 'block';
        } else {
            // Иначе добавляем заглушку
            scheduleList.innerHTML = "<li>Расписание не найдено.</li>";
            scheduleDiv.style.display = 'block';
            scheduleSection.style.display = 'block';
        }
    } catch (error) {
        console.error('Ошибка при загрузке расписания:', error);
    }
}
