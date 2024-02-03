// NPM Packages Included
const path = require('path');
const express = require('express'); 
const sequelize = require('./config/connection');

// Create a const var for express(), easier to use
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Create a PORT const var to specify where the server should run
const PORT = process.env.PORT || 3001;

// Syncs our SQL db to our server, and inits our server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});