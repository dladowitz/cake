
-- Locally (if database is already created):
-- psql <databasename> -f seed.sql

-- On heroku there is only one database
-- cat seed.sql | heroku pg:psql

-- //create locations
INSERT INTO locations(name, img_url) values('Tradecraft', 'http://s3-media2.fl.yelpcdn.com/bphoto/ISimnz4_yTvuPaa-aOwDMA/l.jpg');
INSERT INTO locations(name, img_url) values('Jackson Square', 'http://tripwhat.com/img/travel/item:-9223372036852163167:photos/831eeca229abe5ba7e4a421bfd7aff50-450-190');
INSERT INTO locations(name, img_url) values('Yo Yos', 'http://tripwhat.com/img/travel/item:-9223372036852157418:photos/ffffbeb52cb7257f990f29f2ff9d091a-450-190');
INSERT INTO locations(name, img_url) values('Grumpys Pub', 'http://tripwhat.com/img/travel/item:-9223372036850039777:photos/2ef7c43f7efd71204dff40409ca274bf-450-190');
INSERT INTO locations(name, img_url) values('Cafe Me', 'http://tripwhat.com/img/travel/item:-9223372036852286085:photos/8daa4557f8438379735fe1de5c12bd33-450-190');
INSERT INTO locations(name, img_url) values('Reveille Coffee', 'http://s3-media4.fl.yelpcdn.com/bphoto/hVRz34RKipOGxAj2KH3Aww/l.jpg');
INSERT INTO locations(name, img_url) values('Brioche Bakery', 'http://tripwhat.com/img/travel/item:-9223372036850039629:photos/7dfa153511e6b7537ab3c5747b63f9e8-450-190');
INSERT INTO locations(name, img_url) values('Breaking Break', 'http://s3-media1.fl.yelpcdn.com/bphoto/efufJEZ0aSItXe76epfNZg/l.jpg');

INSERT INTO deals(name, location_id, birthday_deal, message) values('Free Tuition', 1, true, 'Free tuition for your birthday - a $14K value!');
INSERT INTO deals(name, location_id, message) values('A Round of Drinks', 1, 'Misha is buying you a round of drinks at Grumpys this month');
