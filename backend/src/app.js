const express = require('express');
const { productsRoute, salesRoute } = require('./routers');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productsRoute);
app.use('/sales', salesRoute);

module.exports = app;
