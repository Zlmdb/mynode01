/*直接给响应数据*/


const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html;charset=utf-8');//设置响应消息头
    res.write('<html>');//向客户端输出响应消息主体
    res.write('<body>');
    res.write('<h1>欢迎来到我的站点</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();//必须要结束响应。
})
server.listen(8002,'127.0.0.1',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('启动服务器成功，正在监听1234端口')
    }

})