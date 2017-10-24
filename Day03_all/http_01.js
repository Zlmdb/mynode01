
var http=require('http');
var options={
    hostname:'www.baidu.com',
    port:80,
    path:'/'
}
var cliReq=http.get(options,function(response){
    console.log(response);
    console.log(`状态码:${response.statusCode}`);
    console.log(`响应头:${JSON.stringify(response.headers)}`);
    response.setEncoding('utf8');
    response.on('data',function(chunk){
        console.log(`响应内容:${chunk}`);
    })
});

//var cliReq=http.get('http://www.baidu.com',function(response){
//    console.log(response);
//});

cliReq.setTimeout(3000,function(){
    console.log('请求超时');
    cliReq.abort();
})
cliReq.on('abort',function(){
    console.log('请求超时');
})
cliReq.on('error',function(err){
    console.log(err)
})