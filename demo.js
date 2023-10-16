const express = require('express');
const app = express();
const port = 8080;

// In your Node.js server using Express.js

app.get('/test', (req, res) => {
  // You can define API routes and logic here
  res.json({ message: 'Hello from the Node.js server!' });
});

app.listen(port, () => {
  console.log(`Node.js server is running on http://localhost:${port}`);
});
