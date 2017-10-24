
/*根据请求的pathname,获取这个pathname后，把它当做fs.readfile的参数，读取这个文件，获取这个文件的内容，并返回给客户端*/

const http=require('http');
const url=require('url');
const fs=require('fs');

const server=http.createServer();
server.on('request',(req,res)=>{
   let u=req.url,
       uParse=url.parse(u);//利用url模块，解析请求的路径

    //console.log(uParse);
    //从url对象里面取fileName;
    var pathname="."+uParse.pathname;
    console.log(pathname);
    fs.readFile(pathname,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            //console.log('文件读取成功');
            res.statusCode=200;
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.write(data);//把读取到的内容响应给客户端
            res.end();//响应结束
            //console.log();
            //console.log(data);
        }
    })
})
server.listen(8003,'127.0.0.1',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('启动服务器成功，正在监听8003端口。。。')
    }

})