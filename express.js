const express = require('express');
const path = require('path');
const products = require('./beispiel-assets/products.json');
const app = express();
const port = 3333;
const __dirname = '';

app.use('/', express.static(path.join(__dirname, 'beispiel-assets')));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// frontend
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'overview.html'));
  response.json(products);
});
app.get('/detailed_view', (request, response) => {
  response.sendFile(path.join(__dirname, 'detailed_view.html'));
});
app.get('/checkout', (request, response) => {
  response.sendFile(path.join(__dirname, 'checkout.html'));
});
app.get('/shopping_cart', (request, response) => {
  response.sendFile(path.join(__dirname, 'shopping_cart.html'));
});

//backend

app.get('/api/products', (request, response) => {
  response.sendFile(path.join(__dirname, './beispiel-assets/products.json'));
});

/* app.get('/', (req, res) => {
  res.send(`The resource '/' has been requested`);
}); */
