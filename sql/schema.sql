CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE pokemon (
    id serial PRIMARY KEY,
    pokemon_name text,
    pokemon_type text,
    slug text,
    image_url text
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    pokemon_rank integer,
    pokemon_review text,
    pokemon_id integer REFERENCES pokemon(id),
    user_id integer REFERENCES users(id)
);