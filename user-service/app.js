
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json(["Alice", "Bob"]);
});

app.listen(3001, () => {
  console.log("user-service running on port 3001");
});
