document.getElementById('table-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const language = document.getElementById('language').value;
    const days = parseInt(document.getElementById('days').value, 10);
    const lessons = parseInt(document.getElementById('max-lessons').value, 10);

    const translations = {
        ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        es: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        it: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
    };

    const headers = {
        ru: 'День',
        en: 'Day',
        es: 'Día',
        it: 'Giorno'
    };

    const lessonHeaders = {
        ru: 'Пара',
        en: 'Class',
        es: 'Clase',
        it: 'Lezione'
    };

    const tableContainer = document.getElementById('table-container');
    clearTable(tableContainer);

    const table = document.createElement('table');
    table.classList.add('schedule-table');

    const headerRow = document.createElement('tr');
    const dayHeader = document.createElement('th');
    dayHeader.textContent = headers[language];
    headerRow.appendChild(dayHeader);

    for (let i = 1; i <= lessons; i++) {
        const lessonHeader = document.createElement('th');
        lessonHeader.textContent = `${lessonHeaders[language]} ${i}`;
        headerRow.appendChild(lessonHeader);
    }
    table.appendChild(headerRow);

    for (let i = 0; i < days; i++) {
        const row = document.createElement('tr');

        const dayCell = document.createElement('td');
        dayCell.textContent = translations[language][i];
        row.appendChild(dayCell);

        for (let j = 0; j < lessons; j++) {
            const lessonCell = document.createElement('td');
            row.appendChild(lessonCell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);

    localStorage.setItem('tableParams', JSON.stringify({ language, days, lessons }));
});

window.addEventListener('load', function() {
    const savedParams = JSON.parse(localStorage.getItem('tableParams'));
    if (savedParams) {
        document.getElementById('language').value = savedParams.language;
        document.getElementById('days').value = savedParams.days;
        document.getElementById('max-lessons').value = savedParams.lessons;

        document.getElementById('table-form').dispatchEvent(new Event('submit'));
    }
});

document.getElementById('remove-table').addEventListener('click', function()  {
    const tableContainer = document.getElementById('table-container');
    clearTable(tableContainer);
});

function clearTable(tableContainer) {
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
}