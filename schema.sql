-- to create schema run:
-- cat schema.sql | psql

-- CREATE DATABASE cake;
--
-- \c cake;

CREATE TABLE users(
  id serial primary key not null,
  email varchar(100) not null,
  birthday date not null,
  created_at timestamptz DEFAULT localtimestamp not null
);

CREATE TABLE locations(
  id serial primary key not null,
  name varchar(100) not null,
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
