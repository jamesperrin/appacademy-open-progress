const express = require('express');

const hostname = 'localhost';
const port = '8081';
const app = express();

const data = {
  users: [],
};

// Use POST to add a user
app.post('/users', (req, res) => {
  let newUser = {
    name: 'Phyllis',
    age: 68,
  };

  data.users.push(newUser);
  res.send(newUser);
});

// Use GET to retrieve a list of all users
app.get('/users', (req, res) => {
  res.send(data);
});

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, hostname, () => {
  console.log(`Listening http://${hostname}:${port}`);
});
