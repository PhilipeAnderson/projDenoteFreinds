 CREATE DATABASE savelinks;

 USE savelinks;

--USERS TABLE
 CREATE TABLE users(
     id INT(11) NOT NULL,
     username VARCHAR(16) NOT NULL,
     password VARCHAR(60) NOT NULL
 );

 ALTER TABLE users
    ADD PRIMARY KEY (id);

 ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2; 

 DESCRIBE users;

 --LINKS TABLE
 CREATE TABLE links(
     id INT(11) NOT NULL,
     title VARCHAR(150) NOT NULL,
     url VARCHAR(250) NOT NULL,
     whats VARCHAR(18) NOT NULL,
     description TEXT,
     friends BOOLEAN NOT NULL,
     user_id INT(11),
     created_at timestamp NOT NULL DEFAULT current_timestamp,
     CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
 );

 ALTER TABLE links
    ADD PRIMARY KEY (id);

 ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2; 

 DESCRIBE links;


 CREATE USER 'philipe'@'%' IDENTIFIED VIA mysql_native_password USING '***';GRANT ALL PRIVILEGES ON *.* TO 'philipe'@'%' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;