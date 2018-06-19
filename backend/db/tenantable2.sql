DROP DATABASE IF EXISTS tenantable2;
CREATE DATABASE tenantable2;
\c tenantable2;

DROP TABLE IF EXISTS users, apartments, reviews;

CREATE TABLE users
(
  ID SERIAL PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  bio VARCHAR,
  imgurl VARCHAR DEFAULT 'http://res.cloudinary.com/tutelage/image/upload/v1522734450/defaultpic.png',
  istenant boolean
  -- apartment_id INTEGER REFERENCES apartment(ID)
);


CREATE TABLE apartments
(
    ID SERIAL PRIMARY KEY, 
    apt_name VARCHAR,
    apt_address VARCHAR,
    imgurl VARCHAR DEFAULT 'http://res.cloudinary.com/tutelage/image/upload/v1522734450/defaultpic.png',
    landlord_id INTEGER REFERENCES users(ID),
    tenant_id INTEGER REFERENCES users(ID)
    -- landlord_id INTEGER REFERENCES users(ID),
    -- tenant_id INTEGER REFERENCES users(ID)
);


CREATE TABLE reviews 
(
    ID SERIAL PRIMARY KEY,
    rating VARCHAR,
    review_text VARCHAR,
    proof_photo VARCHAR,
    user_id INTEGER,
    apartment_id INTEGER REFERENCES apartments(ID)
);


INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Candace', 'shebron@wnba.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I enjoy walking my golden retriever in Park Slope, Brooklyn on sunny days, listening to classical music, and playing basketball to stay in shape.', '/images/Candace400x400.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Andre', 'lobcity@nba.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I enjoy road trips with my friends to my hometown of Houston. I also like visiting Dallas for short periods of time...', '/images/DeAndreSmiling635x651.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('James', 'kingjames@nba.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I run several businesses across the nation, but I spend most of my time in Cleveland. I like bike riding to stay in shape, and listening to music on my Beats By Dre headphones.', '/images/lebron600x559.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Jack', 'jacktripper@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I spend most of my time hanging out with my roomates. I consider myself a ladies man, so if you are reading this and you are single...', '/images/JackTripper490x450.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Janet', 'janet@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I mostly like to read novels in my spare time. I watch movies and hang out with my roomates. I like a clean apartment and appreciate roomates who have the same cleaning standards as me.', '/images/janet434x436.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Chrissy', 'chrissy@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I really like surprises but they are so hard to plan for...', '/images/Chrissy380x475.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Terri', 'terri@threesco.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I like sunbathing and hiking and whitewater rafting when I have a chancce to vacation. I am also a huge sushi fan!', '/images/terri720x557.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Charlie', 'silverfox@gmail.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I mostly enjoy quiet afternoons on the balcony with a good novel. I frequently walk my doberman, "Sniffles" during the evenings around the community lake.', '/images/randomtenant6.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Terrell', 'terrell26@hotmail.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'Working out, playing video games in my spare time, and watching the cooking channel leaves me pretty content on most days.', '/images/randomtenant7.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Violet', 'violet@yahoo.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'Most of my time is spent at the office crunching numbers. Due to my busy schedule, I like to order takeout (Thai if you were wondering 🍜🦐🍽', '/images/violettenant.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Mitchell', 'mitch@mitchandassociates.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I try to get sleep most days. From the time I wake up I am on the go at my firm and have little time to rest. I do appreciate a good game of chess♞.', '/images/randomtenant8.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Albert', 'al@gmail.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I like to chill on social media. I check my Twitter feed about 100 times a day. Otherwise, you can catch me watching MSNBC just for the fun of it.', '/images/randomtenant2.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Greg', 'gregory_smith@outlook.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'Writing, surfing, and rec league softball are my favs. The rest of the time I volunteer at Habitat for Humanity.', '/images/randomtenant9.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Quincy', 'unstoppable1@gmail.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'HGTV is the BEST! I drive for UBER and meet tons of interesting people everyday.', '/images/randomtenant3.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Olivia', 'bigOcatlover@yahoo.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'So, where do I begin? I ❤️ cats, and spend most of my time doing arts and craftsy-type things. That and watching sunsets!', '/images/pinktenant.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Kevin', 'kevkev93@hotmail.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I am usually with me girl. We are engaged to be married this summer, so besides planning, we are likely at the movies eating tons of popcorn.', '/images/randomtenant5.jpg', 'true');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Donald Sterling', 'disgracedowner@clippers.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I do not like people. Humbug.', '/images/donaldsterling600x400.jpg', 'false');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Dan Gilbert', 'disgruntledowner@quickenloans.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'Once you check in, you cannot check out...', '/images/DanGilbertHeadshot300x300.png', 'false');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Mr. Roper', 'nosyguy@threescompany.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'Your business IS my business!', '/images/MrRoper400x400.jpg', 'false');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Ralph Furley', 'playboy@threescompany.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I am the best landlord in town! Ask My tenants!', '/images/DonKnotts682x999.jpg', 'false');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Robert Floresheim', 'robert@development.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'I do not like the term "landlord". I prefer the term "property manager". It is hard work, but I enjoy it.', '/images/landlord.jpg', 'false');
INSERT INTO users
    (username, email, password_digest, bio, imgurl, istenant)
values
    ('Abraham Finnowitz', 'abraham@highrises.com', '$2a$10$kjH6HiZmn9y4jABk9PN3v.rHJ51RJWGo5nYPZba16hIX4YUr9CVjS', 'You cannot believe everything you read in the papers. Landlords are beginning to get a bad rap based on heresay. I run a good business.', '/images/nyclandlord.jpg', 'false');




INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Sterling Villas', '1111 S Figueroa St, Los Angeles, CA 90015', '/images/DilapidatedApartment2816x2112.jpg', '8');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Sparks Tower', '28 Park Place, Brooklyn, NY 11217', '/images/ApartmentBuilding1944x2592.jpg', '9');
    INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Cavalier Court', '1 Center Court, Cleveland, OH 44115', '/images/CleanApt1200x900.jpg', '10');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Santa Monica Terrace', '28 Park Place, Santa Monica, CA 90410', '/images/DecentApartment2000x1667.jpg', '11');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Tremont Village', '299 Fulton Parkway, Brooklyn, NY 11217', '/images/MediocreBuilding650x433.jpg', '12');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Blossom Creek', '4879 Park Place, New York, NY 10054', '/images/NiceNYApt750x750.jpg', '13');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Shaker Heights', '14 Halstead Street, Cincinatti, OH 10054', '/images/apartment10.jpg', '10');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Peaceful Oaks', '51 Antonio Drive, Queens, NY 10254', '/images/omahaapartment.jpg', '9');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('High Pointe Apartments', '1029 Ellington Court, Santa Monica, CA 90411', '/images/washington-tower-apartments-san-francisco.jpg', '11');
INSERT INTO apartments
    (apt_name, apt_address, imgurl, landlord_id)
values
    ('Sherman Oaks', '2837 Rumfeld Road, Santa Monica, CA 90418', '/images/remoteapartment.jpg', '11');




INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('💩', 'I have lived in Sparks Tower for approxiamately 3 months now. To put it mildly, dwelling here has been an adventure to say the least.', '/images/uglyApt1280x843.jpg', '1', '1');

INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('💩', 'This building has the WORST owner ever! I am pretty confident he is racist. He does charges higher security deposits to black/brown people and has been heard around town using racial epithets in his conversation with his mistress. The conditions here are HORRIBLE. Rats, roaches, spiders, chipped paint, asbestos, broken appliances. Sterling Vilas is the WORST! Beware: DO NOT MOVE HERE!!!', '/images/badApt540x304.jpg', '2', '1');

INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('⭐️⭐️', 'The landlord of this building is very possessive. Because I run several businesses, (particularly in Cleveland and in Miami, I frequently need to reocate. Yet, at the end of my lease, when I decided to move, he wrote a scathing letter to other rental agencies about how I was bad for business and he made threats against me. He stated I owed more than I did even though I had no debts (I paid all my rent on time). He acted as if he owned me and tried to demean my character. The rental property is great and the amenities and workout facilities are great. But I would have to reconsider when it comes to signing another rental agreement with him.', '/images/lebron600x559.jpg', '3', '2');

INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('⭐️⭐️⭐️', 'This building is okay. I mean, the premises are pretty outdated (everything still looks like it is from the 70s) and is in desperate need for an upgrade. But other than having a few nosy neighbors, the space is quiet, affordable, and it is in convenient walking distance to my job at Angelinos Restaurant.', '/images/lebron600x559.jpg', '4', '3');

INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('⭐️⭐️⭐️⭐️⭐️', 'I really enjoy living here! The building allows pets (even though I do not have any, personally) and the people here are really friendly. The landlord is eccentric, but he is still a pretty nice guy. We had some situations where it was hard to come up with the rent and he was really understanding about it. He keeps responds quickly to maintainace request as well which is a major plus.', '/images/lebron600x559.jpg', '5', '3');

  INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('⭐️⭐️⭐️⭐️⭐️','I would recommend this apartment complex to anybody. It is a great place to live. They have a swimming pool, parking lot, and a clubhouse for guests. They even have a playground on site. The rent has not increased in about 2 years too, and that is super rare. This landlord values quality tenants, so as long as they do no harm to the property he is really cool about everything. He also has quarterly events for the tenants, so he cares about the people who live there. HIGHLY RECCOMEND!', '/images/lebron600x559.jpg', '6', '4');

  INSERT INTO reviews
  (rating, review_text, proof_photo, user_id, apartment_id)
values
  ('⭐️⭐️⭐️⭐️⭐️', 'This is a nice place to live. It is critter free because there exterminators are sent annually, and maintenance on the building and on the individual units is performed monthly. It is a great price point for this area and is surrounded by good schools and the beach. It is also easy to move your furniture in because of the wide doors and stairwells.', '/images/lebron600x559.jpg', '7', '4');