(function(){
  console.log(111);
})();

//匿名函数自调（层层嵌套之后，又层层执行console.log(num);从里往外执行的console.log(num)）
(function(num){
  if(num>0){
    arguments.callee(num-1);
    console.log(num);//单线程执行，全部循环完之后，才执行这条语句，全部循环完，num=1了，所以从1开始输出，回调执行这条语句。
  }
})(10);


//添加加号，变成一个完整的表达式，后面加(),执行。
+function(){
  console.log(222);
}();


//箭头函数
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



