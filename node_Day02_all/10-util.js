var util=require('util');
//ʹ�ô�%ռλ���ķ�ʽ��ʽ���ַ���
var data={
  name:"phone",
  price:2999,
  inOnsala:false
};
var s=util.format('product:%s,price:%d,inOnsala:%s,JSON:%j',data.name,data.price,data.inOnsala,data);
console.log(s);
//����һ��������ַ�����ʽ
var s2=util.inspect(data);
console.log(typeof(data));
console.log(typeof(s2));

//ʵ�ֹ��췽����ļ̳�
function Base(){
  this.name="Base";
}
Base.prototype.age=20;
function Sub(){
  this.name="Sub";
}
//Sub�̳�Base
util.inherits(Sub,Base);
var s3=new Sub();
console.log(s3.name);
console.log(s3.age);






