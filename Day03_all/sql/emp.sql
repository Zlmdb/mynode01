SET NAMES UTF8;
DROP DATABASE IF EXISTS emp;
CREATE DATABASE emp CHARSET=UTF8;
USE emp;
/*员工表*/
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
(NULL,'TOM','程序员','2010-12-20','8000',1),
(NULL,'MIA','人事员','2010-13-20','7000',3),
(NULL,'UIM','机修员','2010-7-20','9000',2),
(NULL,'NXI','打字员','2010-2-20','12000',4),
(NULL,'OIUY','党员','2010-6-20','4000',2),
(NULL,'NQI','官','2010-9-24','4000',5);


/*部门表*/
CREATE TABLE dept(
        did INT PRIMARY KEY AUTO_INCREMENT,
        dname  VARCHAR(32)
);
INSERT INTO dept VALUES
(NULL,'人事部'),
(NULL,'事业部'),
(NULL,'技术部');

/*子查询*/
SELECT * FROM user WHERE did=(
        SELECT did FROM dept WHERE dname="人事部"
);

/*子查询，当查询同一个表的时候*/
UPDATE user SET salary=salary*1.1 WHERE salary<(
     SELECT * FROM (SELECT AVG (salary) FROM user) AS tmp
)


































