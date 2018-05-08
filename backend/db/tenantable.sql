DROP DATABASE IF EXISTS tenantable;
CREATE DATABASE tenantable;
\c tenantable;

CREATE TABLE tenants
(
    ID SERIAL PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest VARCHAR NOT NULL,
    bio VARCHAR,
    reviews VARCHAR,
    ratings INTEGER,
    comments_responses VARCHAR,
    avatar_photo VARCHAR,
    proof_photos VARCHAR,
    apartment_id INTEGER
);

CREATE TABLE apartments
(
    ID SERIAL PRIMARY KEY, 
    apt_name VARCHAR,
    apt_address VARCHAR,
    apt_photo VARCHAR DEFAULT 'http://res.cloudinary.com/tenantable/image/upload/v1525719512/DefaultApartmentPhoto925x1024.jpg',
    landlord_id INTEGER 
);

CREATE TABLE landlords
(
    ID SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR,
    photo VARCHAR DEFAULT 'http://res.cloudinary.com/tenantable/image/upload/v1525721213/default-user-image512x512.png',
    comments_responses VARCHAR,
    proof_photos VARCHAR,
    apartment_id INTEGER
);


INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('Candace', 'shebron@wnba.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I enjoy walking my golden retriever in Park Slope, Brooklyn on sunny days, listening to classical music, and playing basketball to stay in shape.', 'I have lived in Sparks Tower for approxiamately 3 months now. To put it mildly, dwelling here has been an adventure to say the least.', '1', '', '', '', '2' );
INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('Andre', 'lobcity@nba.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I enjoy road trips with my friends to my hometown of Houston. I also like visiting Dallas for short periods of time...', 'This building has the WORST owner ever! I am pretty confident he is racist. He does charges higher security deposits to black/brown people and has been heard around town using racial epithets in his conversation with his mistress. The conditions here are HORRIBLE. Rats, roaches, spiders, chipped paint, asbestos, broken appliances. Sterling Vilas is the WORST! Beware: DO NOT MOVE HERE!!!', '0', '', '', '', '1');


INSERT INTO apartments
    (apt_name, apt_address, apt_photo, landlord_id)
values
    ('Sterling Villas', '1111 S Figueroa St, Los Angeles, CA 90015', '', '1');
INSERT INTO apartments
    (apt_name, apt_address, apt_photo, landlord_id)
values
    ('Sparks Tower', '28 Park Place, Brooklyn, NY 11217', '', '2');


INSERT INTO landlords
    (firstname, lastname, email, photo, comments_responses, proof_photos, apartment_id)
values
    ('Donald', 'Sterling', 'disgracedowner@clippers.com', '', 'I deny all claims! You people are always complaining!', '', '1');
INSERT INTO landlords
    (firstname, lastname, email, photo, comments_responses, proof_photos, apartment_id)
values
    ('Dan', 'Gilbert', 'disgruntledowner@quickenloans.com', '', 'I do not like when my tenants leave. I will write a letter to everyone letting them know that you should not have left!', '', '2');