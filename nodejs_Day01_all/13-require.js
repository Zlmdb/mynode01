var fs=require('fs');
//node里的读取文件是异步的，所有的异步都有回调函数。
fs.readFile('./00.txt',(err,data)=>{
  if(err){
    console.log("文件读取失败");
    console.log(err);
  }else{
    console.log("文件读取成功");
    console.log(data);
    console.log(data.toString());
  }
});