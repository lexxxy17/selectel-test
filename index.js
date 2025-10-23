import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Привет! Это базовый API на Node.js' });
});

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/ai.lingofast.fun/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/ai.lingofast.fun/fullchain.pem'),
};

https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS сервер запущен на 3000 порту');
});



