const express = require('express');
const logger = require('./middleware/logger');
const products = require('./routes/products');

const app = express();

app.use(logger);

//Router for products
app.use('/api/v1/products', products);

const PORT = process.env.PORT || 5001;

app.listen(
    PORT, 
    console.log(`Server running in development mode on PORT: ${PORT}`)
);