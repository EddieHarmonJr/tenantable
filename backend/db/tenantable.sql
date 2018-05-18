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
INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('James', 'kingjames@nba.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I run several businesses across the nation, but I spend most of my time in Cleveland. I like bike riding to stay in shape, and listening to music on my Beats By Dre headphones.', 'The landlord of this building is very possessive. Because I run several businesses, (particularly in Cleveland and in Miami, I frequently need to reocate. Yet, at the end of my lease, when I decided to move, he wrote a scathing letter to other rental agencies about how I was bad for business and he made threats against me. He stated I owed more than I did even though I had no debts (I paid all my rent on time). He acted as if he owned me and tried to demean my character. The rental property is great and the amenities and workout facilities are great. But I would have to reconsider when it comes to signing another rental agreement with him.', '0', '', '', '', '2');
INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('Jack', 'jacktripper@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I spend most of my time hanging out with my roomates. I consider myself a ladies man, so if you are reading this and you are single...', 'This building is okay. I mean, the premises are pretty outdated (everything still looks like it is from the 70s) and is in desperate need for an upgrade. But other than having a few nosy neighbors, the space is quiet, affordable, and it is in convenient walking distance to my job at Angelinos Restaurant.', '0', '', '', '', '3');
INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('Janet', 'janet@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I mostly like to read novels in my spare time. I watch movies and hang out with my roomates. I like a clean apartment and appreciate roomates who have the same cleaning standards as me.', 'I really enjoy living here! The building allows pets (even though I do not have any, personally) and the people here are really friendly. The landlord is eccentric, but he is still a pretty nice guy. We had some situations where it was hard to come up with the rent and he was really understanding about it. He keeps responds quickly to maintainace request as well which is a major plus.', '0', '', '', '', '3');
INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('Chrissy', 'chrissy@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I really like surprises but they are so hard to plan for...', 'I would recommend this apartment complex to anybody. It is a great place to live. They have a swimming pool, parking lot, and a clubhouse for guests. They even have a playground on site. The rent has not increased in about 2 years too, and that is super rare. This landlord values quality tenants, so as long as they do no harm to the property he is really cool about everything. He also has quarterly events for the tenants, so he cares about the people who live there. HIGHLY RECCOMEND!', '0', '', '', '', '3');
INSERT INTO tenants
    (username, email, password_digest, bio, reviews, ratings, comments_responses, avatar_photo, proof_photos, apartment_id)
values
    ('Terri', 'terri@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I like sunbathing and hiking and whitewater rafting when I have a chancce to vacation. I am also a huge sushi fan!', 'This is a nice place to live. It is critter free because there exterminators are sent annually, and maintenance on the building and on the individual units is performed monthly. It is a great price point for this area and is surrounded by good schools and the beach. It is also easy to move your furniture in because of the wide doors and stairwells.', '0', '', '', '', '4');










INSERT INTO apartments
    (apt_name, apt_address, apt_photo, landlord_id)
values
    ('Sterling Villas', '1111 S Figueroa St, Los Angeles, CA 90015', '', '1');
INSERT INTO apartments
    (apt_name, apt_address, apt_photo, landlord_id)
values
    ('Sparks Tower', '28 Park Place, Brooklyn, NY 11217', '', '2');
    INSERT INTO apartments
    (apt_name, apt_address, apt_photo, landlord_id)
values
    ('Cavalier Court', '1 Center Court, Cleveland, OH 44115', '', '3');
INSERT INTO apartments
    (apt_name, apt_address, apt_photo, landlord_id)
values
    ('Santa Monica Terrace', '28 Park Place, Santa Monica, CA 90410', '', '4');


INSERT INTO landlords
    (firstname, lastname, email, photo, comments_responses, proof_photos, apartment_id)
values
    ('Donald', 'Sterling', 'disgracedowner@clippers.com', '', 'I deny all claims! You people are always complaining!', '', '1');
INSERT INTO landlords
    (firstname, lastname, email, photo, comments_responses, proof_photos, apartment_id)
values
    ('Dan', 'Gilbert', 'disgruntledowner@quickenloans.com', '', 'I do not like when my tenants leave. I will write a letter to everyone letting them know that you should not have left!', '', '2');
INSERT INTO landlords
    (firstname, lastname, email, photo, comments_responses, proof_photos, apartment_id)
values
    ('Mr.', 'Roper', 'nosyguy@threescompany.com', '', 'I believe that the business of my tenants is also my business.', '', '3');
INSERT INTO landlords
    (firstname, lastname, email, photo, comments_responses, proof_photos, apartment_id)
values
    ('Ralph', 'Furley', 'playboy@threescompany.com', '', 'I like my tenants to be quiet, respectable and orderly; that way there are no problems.', '', '4');