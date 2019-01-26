DROP DATABASE IF EXISTS PetTracker_db;
CREATE DATABASE PetTracker_db;

-- CREATE TABLE PetInfo (
-- id INTEGER (15) AUTO_INCREMENT NOT NULL,
-- pet_name VARCHAR (50) NOT NULL,
-- breed VARCHAR (50) NOT NULL,
-- weight DECIMAL (50) NOT NULL,
-- height DECIMAL (50) NOT NULL,
-- age INTEGER (50),
-- primary key (id)
-- );

-- Select * from PetInfo;

-- CREATE TABLE VetInfo (
-- id INTEGER (15) AUTO_INCREMENT NOT NULL,
-- hospital VARCHAR (50) NOT NULL,
-- vet_name VARCHAR (50) NOT NULL,
-- phone_number VARCHAR (50) NOT NULL,
-- address VARCHAR (50) NOT NULL,
-- primary key (id)
-- );

-- Select * from VetInfo;

-- CREATE TABLE Vaccinations (
-- id INTEGER (15) AUTO_INCREMENT NOT NULL,
-- vaccines VARCHAR (50) NOT NULL,
-- vaccine_date DATE NOT NULL,
-- expires DATE NOT NULL,
-- primary key (id)
-- );

-- Select * from Vaccinations;

-- CREATE TABLE DietTracker (
-- id INTEGER (15) AUTO_INCREMENT NOT NULL,
-- diet_type ENUM ("meal","dog treats") NOT NULL,
-- given TIMESTAMP NOT NULL,
-- notes VARCHAR (50) NOT NULL,
-- primary key (id)
-- );

-- Select * from DietTracker;

-- CREATE TABLE TolietTracker (
-- id INTEGER (15) AUTO_INCREMENT NOT NULL,
-- bathroom_type ENUM ("pee","poop") NOT NULL,
-- bathroom_time TIMESTAMP NOT NULL,
-- notes VARCHAR (50) NOT NULL,
-- primary key (id)
-- );

-- Select * from TolietTracker;

-- CREATE TABLE Hygiene (
-- id INTEGER (15) AUTO_INCREMENT NOT NULL,
-- hygiene_type ENUM ("groom","nail clip", "bath") NOT NULL,
-- given_when TIMESTAMP NOT NULL,
-- notes VARCHAR (50) NOT NULL,
-- primary key (id)
-- );

-- Select * from Hygiene;
