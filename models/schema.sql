DROP DATABASE IF EXISTS wanderer_db;

CREATE DATABASE wanderer_db;

USE wanderer_db;

CREATE TABLE customer_accounts (
	id INT NOT NULL AUTO_INCREMENT,
	firstName VARCHAR (100) NOT NULL,
    middleName VARCHAR (100) NOT NULL,
    lastName VARCHAR (100) NOT NULL,
    birthday VARCHAR (320) NOT NULL,
	phoneNumber INT NOT NULL,
	address VARCHAR (320) NOT NULL,
	email VARCHAR (320) NOT NULL,
	password VARCHAR (320) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE travel_packages (
	id INT NOT NULL AUTO_INCREMENT,
	category VARCHAR (100) NOT NULL,
	location VARCHAR (100) NOT NULL,
	flight VARCHAR (100) NOT NULL,
    dateLeaving DATE NOT NULL,
    dateReturning DATE NOT NULL,
	hotel VARCHAR (100) NOT NULL,
	carRental VARCHAR (100) NOT NULL,
	foodCredit INT NOT NULL,
	activities VARCHAR (320) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE custom_packages (
	id INT NOT NULL AUTO_INCREMENT,
	location VARCHAR (100) NOT NULL,
	flight VARCHAR (100) NOT NULL,
	dateLeaving DATE NOT NULL,
    dateReturning DATE NOT NULL,
	hotel VARCHAR (100) NOT NULL,
	carRental VARCHAR (100) NOT NULL,
	foodCredit INT NOT NULL,
	activities VARCHAR (320) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO customer_accounts (firstName, middleName, lastName, birthday, phoneNumber, address, email, password) VALUES 
("Jamie", "V", "Marquez", 05/06/1976, 386-253-8381, "1552 Franklin Avenue Daytona Beach, FL 32114", "JamieVMarquez@test.com", "123"),
("Darren", "T", "Zack", 03/12/1981, 985-879-8968, "2169 Maryland Avenue Feather Sound, FL 34622", "DarrenTZack@test.com", "456"),
("Colin", "L", "Reck", 01/04/1991, 714-578-9292, "4276 Cimmaron Road Fullerton, CA 92632", "ColinLReck@test.com", "789");

INSERT INTO travel_packages (category, location, flight, dateLeaving, dateReturning, hotel, carRental, foodCredit, activities) VALUES 
("Thrifty", "Switzerland", "First", "2018-12-25", "2019-01-02", "ARIA Sky Suites", "Convertible", 100, "something expensive"),
("Comfort", "Canada", "Business", "2019-01-18", "2019-01-23", "The Ritz-Carlton, Kapalua", "Mid-size", 50, "something cool"),
("Bliss", "Germany", "Economy", "2018-01-15", "2019-01-20", "Blackberry Farm", "Economy", 10, "something free"),
("Bliss", "Canada", "Business", "2019-01-18", "2019-01-23", "The Ritz-Carlton, Kapalua", "Mid-size", 50, "something cool");

INSERT INTO custom_packages (location, flight, dateLeaving, dateReturning, hotel, carRental, foodCredit, activities) VALUES 
("United Kingdom", "First", "2019-02-15", "2019-02-20", "Hilton", "Convertible", 100, "something expensive"),
("Japan", "Business", "2019-02-12", "2019-02-16", "Hyatt", "Mid-size", 50, "something cool"),
("Spain", "Economy", "2019-01-23", "2019-01-29", "InterContinental", "Economy", 10, "something free");

SELECT * FROM travel_packages;