require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");// Modulo que maneja las peticiones HTTP en formato JSON
const sequelizeDB = require('./database/DB.js');

const projectRouter = require('./routes/projects.routes.js');

//Middlewares
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies

// Routes
app.use('/projects', projectRouter)

// Setting up the server
const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}` );

    //conecction to the database
    sequelizeDB.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    sequelizeDB.sync({ alter: true, /* match: /test$/  */})
        .then(() => {
            console.log('Database & tables created successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
})
 