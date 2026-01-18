const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const users = await axios.get('http://user-service:3001/users');
    const orders = await axios.get('http://order-service:3002/orders');

    res.json({
      users: users.data,
      orders: orders.data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(80, () => {
  console.log("frontend running on port 80");
});
