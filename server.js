// NPM Packages Included
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); // Sequalized Connection with mySQL Database


// Creating const var(s)
const app = express(); // Create a const var for express(), easier to use
const PORT = process.env.PORT || 3001; // Create a PORT const var to specify where the server should run


// Create a hbs const var
const hbs = exphbs.create({
    defaultLayout: 'main', // Selects the main.handlebars file for its html layout
});

// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public', { 'extensions': ['css'] }));

// Server Routes
const routes = require('./controllers/homeRoutes'); // Create a routes const var to GRAB all the exported router from controllers
app.use(routes);


// Syncs our SQL db to our server, and inits our server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});