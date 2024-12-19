const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = []; // Temporary in-memory storage

// Signup Route
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  if (users.find(user => user.email === email)) {
    return res.status(400).send('User already exists');
  }
  users.push({ email, password });
  res.send('Signup successful');
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).send('Invalid credentials');
  }
  res.send('Login successful');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
