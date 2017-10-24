

/*在浏览器发请求，会一直转，因为没有给响应数据*/
var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
    console.log('web服务器端接收到一个请求。。。。')
    console.log('请求方法:'+req.method);
    console.log('请求URL:'+req.url);
    console.log('请求版本:'+req.httpVersion);
    console.log('请求头:'+req.headers);
});
server.listen('8001','127.0.0.1',function(err){
    if(err){
        console.log('启动失败')
    }else{
        console.log('启动成功，正在监听8000端口。。。')
    }
})
