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

CREATE TABLE Requests(
    id_request INT NOT NULL AUTO_INCREMENT,
    item_request VARCHAR (45) NOT NULL,
    methodo_pay VARCHAR (20) NOT NULL,
    address VARCHAR (250) NOT NULL,

    PRIMARY KEY (id_request)
);

INSERT INTO Requests VALUES (DEFAULT, 'teste item pedido', 'dinheiro', 'rua 12');

DESC Requests;

-- INSERT INTO Menu VALUES (DEFAULT, 'teste-img', 'x-burguer', 'a delicious burguer', 12);