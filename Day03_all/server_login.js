//动态web服务器
const http=require('http');
const url=require('url');
const fs=require('fs');
const mysql=require('mysql');

const server=http.createServer();//创建web服务器
server.on('request',doRequest);//监听客户端请求事件，调用doRequest函数
server.listen(8004,'127.0.0.1',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('启动服务器成功，正在监听8004端口。。。')
    }
});


//处理客户端的HTTP请求
function doRequest(request,response){
    console.log('web服务器接收到一个客户端请求...');
    //解析请求的url地址,如果url.parse()方法的第二个参数是true,那么解析后的对象里的query属性的值是一个对象的形式
    var urlInfo=url.parse(request.url,true);
    //获取.后面的后缀，，如.html ， .do等
    var num=urlInfo.pathname.lastIndexOf('.')+1;//获取点的下标
    var urlSuffix=urlInfo.pathname.substring(num);
    if(urlSuffix==='do'){//以.do结尾的动态请求
        doDynamicRequest(request,response);
    }else{//非以.do结尾的静态请求
        doStaticRequest(request,response);
    }

    //处理静态请求，如.html,.css,直接读取指定的文件内容，发送给客户端即可
    function doStaticRequest(){
        let fileName='.'+urlInfo.pathname;
        fs.readFile(fileName,function(err,data){
            response.setHeader('Content-Type','text/html;charset=UTF-8');
            response.write(data);
            response.end();
        })
    }
    //处理动态请求，如.do
    function doDynamicRequest(){
        if(urlInfo.pathname==='./register.do'){
            //注册新用户
            //读取客户端提交的数据
            let uname=urlInfo.query.uname;
            let upwd=urlInfo.query.upwd;
            //连接数据库
            let conn=mysql.createConnection({
                host:'127.0.0.1',
                user:'root',
                password:'',
                database:'euser'
            });
            //提交SQL语句
            let sql=`INSERT INTO users VALUES(NULL,'${uname}','${upwd}')`;
            conn.query(sql,function(err,data){
                if(data.affectedRows===1){
                    response.setHeader('Content-Type','text/html;charset=UTF-8');
                    response.write('<h3>注册成功</h3>');
                }
                response.end();//响应结束
                conn.end();//关闭连接
            });
        }else if(urlInfo.pathname==='./login.do'){
            let uname=urlInfo.query.uname;
            let upwd=urlInfo.query.upwd;
            let conn=mysql.createConnection({
                host:'127.0.0.1',
                user:'root',
                password:'',
                database:'euser'
            });
            let sql=`SELECT uname,upwd FROM users WHERE uname='${uname}' AND upwd='${upwd}'`;
            conn.query(sql,function(err,data){
                if(data.length===1){//这个相当于成功
                    response.setHeader('Content-Type','text/html;charset=UTF-8');
                    response.write('<h3>登录成功</h3>');
                }else{//这个相当于err存在
                    response.setHeader('Content-Type','text/html;charset=UTF-8');
                    response.write('<h3>登录失败!</h3>');
                }
                response.end();
                conn.end();
            })
        }
    }
}