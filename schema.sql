CREATE TABLE users(
  id serial primary key not null,
  email varchar(100) not null,
  birthday date not null,
  created_at timestamptz DEFAULT localtimestamp not null
);

CREATE TABLE companies(
  id serial primary key not null,
  name varchar(100) not null,
  created_at timestamptz DEFAULT localtimestamp not null
);

CREATE TABLE deals(
  id serial primary key not null,f
  name varchar(100) not null,
  company_id integer not null,
  message text not null,
  created_at timestamptz DEFAULT localtimestamp not null
)

CREATE TABLE registered_deals(
  id serial primary key not null,
  user_id integer not null,
  deal_id integer not null,
  created_at timestamptz DEFAULT localtimestamp not null
)
