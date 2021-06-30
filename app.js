'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const session = require('express-session');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(session({
    secret: 'get rad!',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const pokemonController = require('./routes/pokemon');
const userController = require('./routes/users');

app.use(rootController);
app.use(pokemonController);
app.use('/users', userController);