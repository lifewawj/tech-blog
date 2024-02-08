const router = require('express').Router();

const userRoutes = require('./userRoutes.js'); // Obtain all the routes created in the userRoutes.js file

router.use('/users', userRoutes); // Tells our server to use the Routes within the userRoutes.js file with /users as a param