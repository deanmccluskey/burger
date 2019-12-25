-- seeds.sql
/*
To create burgers_db in MySQL, 
do the following in Terminal:
1. Go to the directory of this sql file, "db"
2. Enter MySQL console, "mysql -u root -p"
3. Run schema, "source schema.sql"
4. Run seeds, "source seeds.sql"
5. Exit MySQL console, "exit"
*/

-- Insert sets of records into burgers table
INSERT INTO burgers (burger_name, devoured) VALUES 
    ('Grilled Chicken Burger', false),
    ('Bacon Cheese Burger', false),
    ('Buffulo Burger', false)
;
