const PI=3.14;
function Circle(r){
  this.size=function(){
    return PI*r*r;
  }
}

//���캯��������module.exports
module.exports=Circle;

