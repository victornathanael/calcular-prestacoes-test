const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.status(200).send('Bootcamp desenvolvedor back end - tópicos especiais');
});

module.exports = app;
