const express = require('express');
const app = express();

const usersRoutes = require('./routes/users.routes');

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.use('/api/users', usersRoutes);

module.exports = app;