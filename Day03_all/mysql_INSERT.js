const mysql=require('mysql');
//连接到mysql服务器
//创建连接
const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:"",
    database:'emp'
});
conn.connect();//此函数可以省略
//提交SQL语句给MYSQL服务器
//const sql='INSERT INTO user VALUES(NULL,"Lee","产品经理","2016-05-12",15000,1)';
const sql='INSERT INTO user VALUES(NULL,"Vans","客户经理","2016-06-12",16000,3)';
conn.query(sql,function(err,result){
    if(err){
        console.log('写入数据出错');
    }else{
        console.log('执行完成。。。');
        console.log("SQL语句影响的行数"+result.affectedRows);
        console.log("自增的id号："+result.insertId);
    }
});
//断开与mysql服务器的连接
conn.end();











