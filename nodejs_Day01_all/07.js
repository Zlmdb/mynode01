(function(){
  console.log(111);
})();

//���������Ե������Ƕ��֮���ֲ��ִ��console.log(num);��������ִ�е�console.log(num)��
(function(num){
  if(num>0){
    arguments.callee(num-1);
    console.log(num);//���߳�ִ�У�ȫ��ѭ����֮�󣬲�ִ��������䣬ȫ��ѭ���꣬num=1�ˣ����Դ�1��ʼ������ص�ִ��������䡣
  }
})(10);


//��ӼӺţ����һ�������ı��ʽ�������(),ִ�С�
+function(){
  console.log(222);
}();


//��ͷ����
(()=>{
  console.log(111);
})();


((n1,n2)=>{
  console.log(n1+n2);
})(3,5);


var emp=(n1,n2)=>{
  console.log(n1*n2);
}
emp(3,4);



