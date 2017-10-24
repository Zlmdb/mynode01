const PI=3.14;
function Circle(r){
  this.size=function(){
    return PI*r*r;
  }
}

//构造函数必须用module.exports
module.exports=Circle;

