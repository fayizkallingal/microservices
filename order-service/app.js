const express = require('express');
const app = express();

app.get('/orders', (req, res) => {
  res.json(["Order-1", "Order-2"]);
});

app.listen(3002, () => {
  console.log("order-service running on port 3002");
});
