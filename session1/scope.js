var a=1;//gobal scope
console.log(a);

function test(){ //local scope
    var b=2;
    console.log(b);
}
test();

function test2(){
    if(true){
        let c=3;
        console.log(c);
    }
    //console.log(c);
}
test2();