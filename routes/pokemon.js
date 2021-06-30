'use strict';

const express = require('express');
const router = express.Router();
const PokemonModel = require('../models/PokemonModel');

router.get('/pokemon', async(req, res) => {

    const data = await PokemonModel.getAll();
    res.render('template', {
        locals: {
            title: 'Pokemon',
            data: data,
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            body: 'partials/pokemon_list'
        }
    });
});

router.get('/pokemon/:slug?', async(req, res) => {

    const { slug } = req.params;
    const reviews = await PokemonModel.getBySlug(slug);

    res.render('template', {
        locals: {
            title: `${reviews[0].pokemon_type} ${reviews[0].pokemon_name}`,
            data: reviews,
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            body: 'partials/pokemon_details'
        }
    })
});

module.exports = router;