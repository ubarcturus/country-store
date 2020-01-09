const express = require('express');
const path = require('path');
const products = require('./beispiel-assets/products.json');
const app = express();
const port = 3333;

app.use("/", express.static(path.join(__dirname, 'beispiel-assets')));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'overview.html'));
  response.json(products);
});

/* app.get('/', (req, res) => {
  res.send(`The resource '/' has been requested`);
}); */
