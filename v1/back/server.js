const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;

app.listen(
    PORT, 
    console.log(`Server running in development mode on PORT: ${PORT}`)
);