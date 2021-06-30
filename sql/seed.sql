INSERT INTO users
    (first_name, last_name, email, password)
VALUES
    ('David', 'Vasek', 'david.vasek51@gmail.com', 'pokemon5');

INSERT INTO pokemon
    (pokemon_name, pokemon_type, slug, image_url)
VALUES
    ('Fire-Type', 'Charizard', 'Charizard_Fire-Type', './images/');


INSERT INTO reviews
    (pokemon_rank, pokemon_review, pokemon_id, user_id)
VALUES
    (3, 'Super Strong Pokemon! Beats everyone else!!!!', 1, 1);