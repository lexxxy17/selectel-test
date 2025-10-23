// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Пример простого маршрута
app.get('/', (req, res) => {
  res.json({ message: 'Привет! Это базовый API на Node.js' });
});

// Пример маршрута, который можно проверить по IP
app.get('/info', (req, res) => {
  // Можно вернуть параметры запроса, IP клиента и т.д.
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({
    ip: clientIp,
    headers: req.headers,
    time: new Date().toISOString(),
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`API слушает на порту ${port}`);
});