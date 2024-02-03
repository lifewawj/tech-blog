const express = require('express');

// Create a const var for express(), easier to use
const app = express();

// Create a PORT const var to specify where the server should run
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('Now listening'));