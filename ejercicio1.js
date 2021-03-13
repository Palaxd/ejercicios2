const p1=9;
const p2=10;
const p3=2;
const p4=5;
var califM=p1;

if (p2<p1) {
    califM=p2;
}else if(p3<califM){
    califM=p3;
}else if(p4<califM){
    califM=p4;
}else{
    califM=p1;
}
var result=((p1+p2+p3+p4)-califM)/3;
console.log(result);