// Запрашиваем у пользователя выбор темы
let theme = prompt("Выберите тему: светлая или темная").toLowerCase();

// Получаем элемент h1
const themeTitle = document.getElementById('theme-title');


// Применяем тему в зависимости от выбора пользователя
if (theme === "светло") {
    document.body.classList.add('light-theme');
    themeTitle.textContent = "Светлая темка";
} else if (theme === "темно") {
    document.body.classList.add('dark-theme');
    themeTitle.textContent = "Темная темка";
} else {
    themeTitle.textContent = "Темка не выбрана или введена неверно.";
}

// 1. HTML: Стандартная структура документа с заголовком и подключенными стилями и скриптом.

// 2. CSS: Описаны стили для светлой и темной тем. Класс light-theme задает белый фон и черный текст, а класс dark-theme - черный фон и белый текст.

// 3. JavaScript:
// Используется prompt, чтобы запросить у пользователя выбор темы.
// В зависимости от выбора (светлая или темная), к элементу body добавляется соответствующий класс (light-theme или dark-theme).
// Также изменяется текст заголовка h1 на основе выбранной темы.