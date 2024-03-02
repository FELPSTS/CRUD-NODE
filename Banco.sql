create database crudjs;
use crudjs;

create table tableUser(
	id 			INT AUTO_INCREMENT,
	username 	TEXT NOT NULL,
    email 		VARCHAR(255) NOT NULL UNIQUE,
	password 	INT NOT NULL,
    
	CONSTRAINT pk_user PRIMARY KEY (id)
);

select * from tableUser;

drop table table_User;

