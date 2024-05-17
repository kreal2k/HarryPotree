const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Устанавливаем путь к статическим файлам (html, css, js)
app.use(express.static(path.join(__dirname, 'static')));

// Отдаем HTML страницу по корневому эндпоинту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
