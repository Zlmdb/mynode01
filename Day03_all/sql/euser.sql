SET NAMES UTF8;
DROP DATABASE IF EXISTS euser;
CREATE DATABASE euser CHARSET=UTF8;
USE euser;
/*Ô±¹¤±í*/
CREATE TABLE user(
        uid INT PRIMARY KEY AUTO_INCREMENT,
        uname  VARCHAR(32),
        upwd VARCHAR(32)
);
INSERT INTO user VALUES
(NULL,'TOM',123),
(NULL,'MARY',234);




































