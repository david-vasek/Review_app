'use strict';

const { response } = require('express');
const db = require('./conn');

class PokemonModel {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM pokemon;`
            )
            console.log(response);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.any(
                `SELECT * FROM reviews 
                INNER JOIN pokemon 
                ON reviews.pokemon_id = pokemon.id 
                WHERE pokemon.slug='${slug}';`
            )
            console.log(response);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = PokemonModel;