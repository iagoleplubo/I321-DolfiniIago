const express = require('express');
const app = express();

const usersRoutes = require('./routes/users.routes');
const errorHandler = require('./middleware/errorHandler');

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.use('/api/users', usersRoutes);

app.use(errorHandler); // toujours en dernier

module.exports = app;