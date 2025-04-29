const express = require('express');

const hostname = 'localhost';
const port = 5000;
const app = express();
app.use(express.json());

app.get('/status', (req, res) => {
  res.send('The server is alive!');
});

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.send(
    '<html><header><title>Express Server running</title></header><body><h1>This is an Express Server</h1></body></html>',
  );
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
