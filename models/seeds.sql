USE wanderer_db;

INSERT INTO customer_accounts (firstName, middleName, lastName, birthday, phoneNumber, address, email, password) VALUES 
("Jamie", "V", "Marquez", 05/06/1976, 386-253-8381, "1552 Franklin Avenue Daytona Beach, FL 32114", "JamieVMarquez@test.com", "123"),
("Darren", "T", "Zack", 03/12/1981, 985-879-8968, "2169 Maryland Avenue Feather Sound, FL 34622", "DarrenTZack@test.com", "456"),
("Colin", "L", "Reck", 01/04/1991, 714-578-9292, "4276 Cimmaron Road Fullerton, CA 92632", "ColinLReck@test.com", "789");

INSERT INTO travel_packages (category, location, flight, dateLeaving, dateReturning, hotel, carRental, foodCredit, activities) VALUES 
("Thrifty", "Switzerland", "First", "2018-12-25", "2019-01-02", "ARIA Sky Suites", "Convertible", 100, "Something Expensive"),
("Comfort", "Canada", "Business", "2019-01-18", "2019-01-23", "The Ritz-Carlton, Kapalua", "Mid-size", 50, "Something Cool"),
("Bliss", "Germany", "Economy", "2018-01-15", "2019-01-20", "Blackberry Farm", "Economy", 10, "Something Free"),
("Bliss", "Canada", "Business", "2019-01-18", "2019-01-23", "The Ritz-Carlton, Kapalua", "Mid-size", 50, "Something cool"),
("Thrifty", "Mexico", "Economy", "2019-01-20", "2019-01-25", "The Resort at Pedregal, Pedregal", "Large", 30, "Something cool"),
("Comfort", "United Kingdom", "Business", "2019-01-28", "2019-02-05", "Sofitel Heathrow, London", "Large", 50, "Something Jolley"),
("Bliss", "France", "First", "2019-02-01", "2019-02-12", "Auberge des Voyageurs, Châtelus-Malvaleix", "Small", 20, "French Things"),
("Thrifty", "Guatemala", "Economy", "2019-02-21", "2019-02-28", "Hotel Casa Veranda Guatemala, Guatemala City", "Mini", 40, "Something Cool"),
("Comfort", "France", "Grand-Hôtel du Cap-Ferrat, A Four Seasons Hotel", "2019-03-01", "2019-03-21", "Saint-Jean-Cap-Ferrat", "Convertible", 100, "Expensive French Things");

INSERT INTO custom_packages (location, flight, dateLeaving, dateReturning, hotel, carRental, foodCredit, activities) VALUES 
("United Kingdom", "First", "2019-02-15", "2019-02-20", "Hilton", "Convertible", 100, "something expensive"),
("Japan", "Business", "2019-02-12", "2019-02-16", "Hyatt", "Mid-size", 50, "something cool"),
("Spain", "Economy", "2019-01-23", "2019-01-29", "InterContinental", "Economy", 10, "something free");