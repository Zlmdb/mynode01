SET NAMES UTF8;
DROP DATABASE IF EXISTS emp;
CREATE DATABASE emp CHARSET=UTF8;
USE emp;
/*Ա����*/
CREATE TABLE user(
        uid INT PRIMARY KEY AUTO_INCREMENT,
        uname  VARCHAR(32),
        upwd VARCHAR(32),
        job VARCHAR(32),
        hiredate DATE,
        salary FLOAT(10,2),
        did  INT
);
INSERT INTO user VALUES
(NULL,'TOM','����Ա','2010-12-20','8000',1),
(NULL,'MIA','����Ա','2010-13-20','7000',3),
(NULL,'UIM','����Ա','2010-7-20','9000',2),
(NULL,'NXI','����Ա','2010-2-20','12000',4),
(NULL,'OIUY','��Ա','2010-6-20','4000',2),
(NULL,'NQI','��','2010-9-24','4000',5);


/*���ű�*/
CREATE TABLE dept(
        did INT PRIMARY KEY AUTO_INCREMENT,
        dname  VARCHAR(32)
);
INSERT INTO dept VALUES
(NULL,'���²�'),
(NULL,'��ҵ��'),
(NULL,'������');

/*�Ӳ�ѯ*/
SELECT * FROM user WHERE did=(
        SELECT did FROM dept WHERE dname="���²�"
);

/*�Ӳ�ѯ������ѯͬһ�����ʱ��*/
UPDATE user SET salary=salary*1.1 WHERE salary<(
     SELECT * FROM (SELECT AVG (salary) FROM user) AS tmp
)


































