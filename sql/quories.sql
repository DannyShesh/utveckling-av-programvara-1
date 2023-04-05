"Hämtar data"
SELECT * FROM table_name;
"Spara till databas"
INSERT INTO table_name("table_column_1", "table_column_2") VALUES(?,?), ["value1", "value2"];
"updatera data"
UPDATE table_name SET table_column_1 = new_value1 WHERE table_id = 1;
(UPDATE users SET email = req.body.email WHERE table_id = req.body.id;)
"ta bort data"
DELETE FROM table_name WHERE table_id = 1;