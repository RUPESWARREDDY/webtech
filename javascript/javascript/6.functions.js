// console.warn("//function without parameter and without return value")
// function fun(){
//     console.log("welcome");
// }
// fun()//welcome
// *************************************************************************************************************************
// function fun1(){
//     console.log("byee");
// }
// fun1()//byee
// fun1()//byee

// *************************************************************************************************************************
// console.warn("//function with parameter and without return value")
// function fnm(nm){
//     console.log(`my name is ${nm}`);
//     console.log(typeof nm)
// }
// fnm('rupeswarreddy')//my name is Rupeswarreddy string
// fnm('puneeth reddy')//my name is puneethreddy string
// console.log( typeof fnm)//function
// *************************************************************************************************************************
// console.warn("//example2")
// function example(a){
//     console.log(`${a}`);
//     console.log(typeof a)
// }
// example(10)//10 number
// example('puneeth reddy')//puneethreddy string
// example()//undefined undefined
// example(true)// true boolean
// *************************************************************************************************************************

// console.warn("//example3")
// function fullname(fnm,lnm,plc){
//     // console.log(fnm,lnm);
//     console.log(`my name is ${fnm} ${lnm} & i am from ${plc}`)
// }
// fullname('Rupeswar','Reddy','plvd')
// fullname('Puneeth','Reddy','plvd')
// *************************************************************************************************************************
// console.warn("//wap to add two numbers by using general function with parameter")
// function addition(a,b,c=10){
//     console.log(a+b);
// }
// addition(10,5,6)
// *************************************************************************************************************************
// console.warn("//wap to check even or odd number by using general function with parameter")
// function evenodd(a){
//     if(a%2==0)
//         console.log(a+"  even number");
//     else
//     console.log(a +"  odd number");
// }
// evenodd(30)
// *************************************************************************************************************************
// console.warn("//wap top print only the even numbers from 25-35 by using  general function with parameter")
// function even(a,b){
//     while(a<=b)
//     {
//     if(a%2==0)
//         console.log(a);
//     a++;
// }
// }
// even(25,35)
// *************************************************************************************************************************
// console.warn("//wap top print only the odd numbers from 50-60 by using  general function with parameter")
// function odd(a,b){
//     while(a<=b)
//     {
//     if(a%2==1)
//         console.log(a);
//     a++;
// }
// }
// odd(50,60)
// *************************************************************************************************************************
// console.warn("default value for the parameter")
// function exm(a=100){
//     console.log(a)
// }
// exm('eswar')//eswar
// *************************************************************************************************************************
// console.warn("//EXAMPLE")
// function fun1(a,b,c=420){
//     console.log(a,b,c);
//     b='paka';
//     console.log(a,b,c);//dinga hai 420 
//                        //dinga paka 420
// }
// fun1('dinga','hai')
// *************************************************************************************************************************
// console.warn("example");
// function fun2(a,b,c=20){
//     console.log(a,c);//10 20
//     b=a+c;
//     console.log(a,b,c);//10 30 20
// }
// fun2(10)
// *************************************************************************************************************************
// console.warn("//nested function")
// function outer(a,b){
//     function inner(a,b){
//         console.log(a,b);//30 40
//     }
//     inner(30,40)
//     inner(30,50)

// }
// outer(10,20)

// *************************************************************************************************************************
// function without parameter & with return value
// function fun3(){
//     return true
// }
// let bool=fun3()//true
// console.log(bool);
// *************************************************************************************************************************
// console.warn("wap to check even or odd numbers by using general function with return value")
// function fun4(){
//     let x=20
//   if(x%2==0)
//   {
//     return `${x} is a even nuber`//20 is a even number
//   }
//   else
//   {
// return  `${x} is a odd nuber`
//   }
// return (x%2==0)?`${x} is a even nuber`:`${x} is a odd nuber`;
// }
// let res=fun4()
// console.log(res);

// *************************************************************************************************************************
// console.warn("wap to add two numbers by using general function with return value")
// function fun5(){
//     let a=40
//     let b=50
//     return `${a+b} addition of two numbers`//90 addition of two numbers
// }
// let res1=fun5()
// console.log(res1);
// *************************************************************************************************************************
// console.warn('//function with parameter with return value')
// function num(a,b){
//     return a+b;
// }
// let sum=num(100,200)
// console.log(`${sum} is total`)//300 is total
// *************************************************************************************************************************
// console.warn("anonymous function")
// let x=function(){
// console.log("hello eswar")
// }
// x()//hello eswar
// console.log(typeof x)// function
// *************************************************************************************************************************
// console.warn("function without parameter & without return value")
// let a=function(){
//     console.log("i am in web tech class")//i am in web tech class
// }
// a()
// *************************************************************************************************************************
// console.warn("function with parameter & without return value")
// let b=function(a,b){
//     console.log("addition of two numbers is:",(a+b))
// }
// b(100,200)
// *************************************************************************************************************************
// console.warn("function without parameter & with return value")
// let c=function(){
//     return true
// }
// let res=c()
// console.log(res)
// *************************************************************************************************************************
// console.warn("function with parameter & with return value")
// let d=function(a,b){
//     return a+b
// }
// let res1=d(100,200)
// console.log(res1)
// // *************************************************************************************************************************
// console.error("arrow function")
// console.warn("function without parameter & without return value")
// let a=()=>{
//     console.log("eswarreddy");
// }
// a()
// // *************************************************************************************************************************
// console.warn("function with parameter & without return value")
// let b=(a,d)=>
// {
//     console.log(`addition of two numbers is:${a+d}`);
// }
// b(100,200)
// *************************************************************************************************************************
// console.warn("function without parameter & with return value")
// let c=()=>
// {
//     let a=100;
//     let b=300;
//     sum=a+b;
//     return sum;
// }
// let res=c()
// console.log(res+"addition of two numbers")
// // *************************************************************************************************************************
// console.warn("function with parameter & with return value")
// let d=(a,b)=>
// {
//     sum=a+b;
//     return sum;
// }
// let res1=d(100,600)
// console.log(res1+"addition of two numbers")
// // *************************************************************************************************************************
//conclusion
// let x=a=>{
//     console.log(a);
// }
// x(10)

// let y=_=>{
//     console.log("hello");
// }
// y()

// let arrow1=_=>'hello eswar'
// console.log(arrow1())
// // *************************************************************************************************************************
//console.warn("self invoking function")
// (function(){
//     console.log("hello")
// }
// ());
//  let fun=function(){
//     return a
//  }
//  let res=fun("hi")
//  console.log(res);
//  console.log(typeof fun);//function
//  console.log(typeof res);//string

//  let x=(function(b){
//     return b
//  }("bye"))
//  console.log(x);//bye
//  console.log(typeof x);//string
// *************************************************************************************************************************
// console.warn("self invoking using anonymous function all methods");
// (function(){
//    console.log("self-invoking");
// }());

// (function(a,b){
//    console.log(a+b);
// }(100,200));

// let x=(function(){
//      return "hello"
// }())
// console.log(x);

// let y=(function(a,b){
//    return a+b
// }("hello",100))
// console.log(y);
// // *************************************************************************************************************************
// console.warn("self invoking using arrow function all methods");
// (()=>{
//    console.log("eswar");
// })();

// ((a,b)=>{
//    console.log(a+b);
// })(100,400);

// let a=(()=>{
//    return "web -tech"
// })();
// console.log(a);

// let b=((a,b)=>{
//    return a+b
// })(100,700);
// console.log(b);
// // *************************************************************************************************************************
// console.log(((a)=>a)("hello world"));
// console.log(((a,b)=>a+b)(10,20));
// // *************************************************************************************************************************
// console.warn("call back function & HOF FUNCTIONS")
// let num=function(){
//    return 100;
// }
// function sum(a,b){
//    return a+b()
// }
// let res=sum(100,num)
// console.log(res);
// // *************************************************************************************************************************
// let surname=function(){
//    return "reddy"
// }
// function fullname(fnm,lnm){
//    console.log(fnm,lnm);
// }
// fullname("rupeswar",surname())
// fullname("puneeth",surname())
// fullname("sujitha",surname())
// // *************************************************************************************************************************
// let frnd=function(){
//    return "subbu"
// }
// function me(i,u){
//    console.log(i,u)
// }
// me("rupesh",frnd())
// ,