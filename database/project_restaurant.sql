CREATE DATABASE Restaurant_Project;

USE Restaurant_Project;

-- DROP DATABASE Restaurant_Project;

CREATE TABLE Menu(
	id_item INT NOT NULL AUTO_INCREMENT,
    item_img VARCHAR(60),
    item_name VARCHAR(45) NOT NULL,
    item_description VARCHAR(120) NOT NULL,
    item_price INT NOT NULL,
	
	PRIMARY KEY(id_item)
);

SELECT * FROM Request_e_Menu;

-- INSERT INTO Menu VALUES (DEFAULT, 'teste-img', 'x-burguer', 'a delicious burguer', 12);