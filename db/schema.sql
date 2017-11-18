CREATE DATABASE dinero_db;
USE dinero_db;

CREATE TABLE user
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	username VARCHAR (20),
	email VARCHAR (30),
	password VARCHAR (20),
	budget INTEGER
	PRIMARY KEY (id)
);

CREATE TABLE income
(
	name VARCHAR(30),
	type VARCHAR(30),
	amount INTEGER,


);

CREATE TABLE expenses
(
	name VARCHAR (30),
	category VARCHAR(20),
	amount_due INTEGER,
	due_date VARCHAR(30)
);