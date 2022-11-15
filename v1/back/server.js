const express = require('express');
const logger = require('./middleware/logger');
const products = require('./routes/products');
const categories = require('./routes/categories');

const app = express();

app.use(logger);
app.use(express.json());

//Router for products
app.use('/api/v1/products', products);
app.use('/api/v1/categories', categories);

const PORT = process.env.PORT || 5001;

app.listen(
    PORT, 
    console.log(`Server running in development mode on PORT: ${PORT}`)
);