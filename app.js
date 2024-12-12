// This is a simple Node.js web application using Express.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Web Application!');
});

// Example route to fetch user data
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  res.json(users);
});

// Example route to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!newUser.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  newUser.id = Math.floor(Math.random() * 1000); // Generate a random ID
  res.status(201).json(newUser);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

