/*
Schema for burgers_db
To run this file, do the following in Terminal:
1. Go to the directory of this sql file
2. Get into mysql console
3. Run "source schema.sql"
*/

-- Drop burgers_db if it already exists
DROP DATABASE IF EXISTS burgers_db;

-- Create burgers_db database and specify it for use
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create burgers table 
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
