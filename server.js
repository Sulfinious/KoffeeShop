const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Устанавливаем директорию, в которой находятся статические файлы 
app.use(express.static(__dirname));

// Обработчик маршрута для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexVue.html'));
});

// Обработчик маршрута для другой страницы
app.get('/corz', (req, res) => {
  res.sendFile(path.join(__dirname, 'corzVue.html'));
});


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
