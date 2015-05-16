-- Locally (if database is already created):
-- psql <databasename> -f schema.sql

-- On heroku there is only one database
-- cat schema.sql | heroku pg:psql

CREATE TABLE users(
  id serial primary key not null,
  email varchar(100) not null,
  birthday date not null,
  created_at timestamptz DEFAULT localtimestamp not null
);

CREATE TABLE locations(
  id serial primary key not null,
  name varchar(100) not null,
  img_url varchar(300),
  created_at timestamptz DEFAULT localtimestamp not null
);

CREATE TABLE deals(
  id serial primary key not null,
  name varchar(100) not null,
  location_id integer not null,
  birthday_deal boolean DEFAULT false not null,
  active boolean DEFAULT true not null,
  message text not null,
  created_at timestamptz DEFAULT localtimestamp not null
);

CREATE TABLE location_signups(
  id serial primary key not null,
  user_id integer not null,
  location_id integer not null,
  created_at timestamptz DEFAULT localtimestamp not null
);
