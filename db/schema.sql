/*
-- schema.sql 
-- To run this file, do the following in Terminal:
-- 1. Go to the directory of this sql file, "db"
-- 2. Enter MySQL console, "mysql -u root -p"
-- 3. Run schema, "source schema.sql"
-- 4. Run seeds, "source seeds.sql"
-- 5. Exit MySQL console, "exit"
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
