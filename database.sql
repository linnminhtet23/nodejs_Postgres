CREATE DATABASE perntodo;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description  VARCHAR(255)
);

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);


--psql -U postgres
--\c jwtdb
--\dt
--heroku pg:psql

SELECT * FROM users;

