var fs=require('fs');
var path='./test';
fs.stat(path,(err,stats)=>{
  if(err){
    fs.mkdir(path);//����Ŀ¼
  }else{
    fs.rmdir(path);//ɾ��Ŀ¼
  }
});
var path2='./log';
fs.stat(path2,(err,stats)=>{
  if(err){
    console.log('��Ŀ¼������');
  }else{
    fs.readdir('./log',(err,list)=>{
      if(err){
        cosole.log('��ȡĿ¼ʧ��');
      }else{
        console.log(list);
      }
    });
  }
});


