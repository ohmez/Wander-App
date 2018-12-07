DROP DATABASE IF EXISTS wanderer_db;

CREATE DATABASE wanderer_db;

USE wanderer_db;

CREATE TABLE customer_accounts (
customer_id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR (100) NOT NULL,
    middle_name VARCHAR (100) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
    birthday VARCHAR (320) NOT NULL,
	phone_number INT NOT NULL,
	address VARCHAR (320) NOT NULL,
	email VARCHAR (320) NOT NULL,
	password VARCHAR (320) NOT NULL,
	PRIMARY KEY (customer_id)
);

CREATE TABLE travel_packages (
	package_id INT NOT NULL AUTO_INCREMENT,
	location VARCHAR (100) NOT NULL,
	flight VARCHAR (100) NOT NULL,
    date_leaving DATE NOT NULL,
    date_returning DATE NOT NULL,
	hotel VARCHAR (100) NOT NULL,
	car_rental VARCHAR (100) NOT NULL,
	food_credit INT NOT NULL,
	activities VARCHAR (320) NOT NULL,
	PRIMARY KEY (package_id)
);

CREATE TABLE custom_packages (
	custom_package_id INT NOT NULL AUTO_INCREMENT,
	location VARCHAR (100) NOT NULL,
	flight VARCHAR (100) NOT NULL,
	date_leaving DATE NOT NULL,
    date_returning DATE NOT NULL,
	hotel VARCHAR (100) NOT NULL,
	car_rental VARCHAR (100) NOT NULL,
	food_credit INT NOT NULL,
	activities VARCHAR (320) NOT NULL,
	PRIMARY KEY (custom_package_id)
);