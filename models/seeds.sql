USE wanderer_db;

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
