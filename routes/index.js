'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("REQUEST SESSION: ", req.session);
    res.render('template', {
        locals: {
            title: "Gotta Catch Them All: Ranking The Top Pokemon",
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            body: 'partials/home'
        }
    });
});

module.exports = router;