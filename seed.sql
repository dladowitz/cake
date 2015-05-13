-- connect to cake database
\c cake;

-- //create locations
INSERT INTO locations(name) values('Tradecraft');
INSERT INTO locations(name) values('Jackson Square');
INSERT INTO locations(name) values('Yo Yos');

INSERT INTO deals(name, location_id, birthday_deal, message) values('Free Tuition', 1, true, 'Free tuition for your birthday - a $14K value!');
INSERT INTO deals(name, location_id, message) values('A Round of Drinks', 1, 'Misha is buying you a round of drinks at Grumpys this month');
