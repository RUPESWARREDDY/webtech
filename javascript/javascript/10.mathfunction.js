//wap to check minimum&maximum number from  this list(10,15,42,8,65,75,18,31,88,60) by using general function

function largest(){
    let x=Math.max(10,15,42,8,65,75,18,31,88,60)
    console.log(`the maximum number is:${x}`);

    let y=Math.min(10,15,42,8,65,75,18,31,88,60)
    console.log(`the maximum number is: ${y}`);
}
largest()
//power function

let p1=Math.pow(2,4);
console.log(p1);

// let n1=Number(prompt("entert a number"))
// let n2=Number(prompt("enter a number2"))
// let res=Math.pow(n1,n2);
// console.log(res)

let powernum=function(x,y){
    let res=Math.pow(x,y)
    return res;
}
let res1=powernum(2,5)
console.log(res1)

//rest& spread operator

function demo(...a)//spread operator
{
    console.log(a);//[10,20,30,40,50]
    console.log(...a);//10,20,30,40,50   //rest operaotor
}
demo(10,20,30,40,50)

function num(...x){//spread operator
    let maxRes=Math.max(...x)//rest operator
    console.log(maxRes)
}
num(10,15,23,45,56,78,90,45,55,666)

//math.random&floor
function num1(){
    let rand=Math.random()*10000
    let res=Math.floor(rand)
    console.log(res);
}
num1()