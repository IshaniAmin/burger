CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
