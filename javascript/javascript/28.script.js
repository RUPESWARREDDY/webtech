// console.log(a);
// console.log(b)
// var a=10;
// console.log(a)
// var b=10;
// console.log(b)
// var a=10;
// console.log(a);
// console.log(e)
// var b=20;
// console.log(a)
// console.log(b)
// {
//     var a=10;
//     let b=30;
//     const c=20;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// // console.log(b)
// console.log(c)

// var a=10;
// console.log(a);

// // console.log(b);
// console.log(c);
// let b=10;
// const c=20;
// let pen={
//     brand:"hello",
//     color:"blue",
//     price:30
// };
// pen.shape="cylinder";
// pen.price=50;
// delete pen.brand;
// console.log(pen)

// let arr=[90,70,30,40,22,33,67,89]

// let [val1,,...rest]=arr;
// console.log(rest);
// console.log(val1);

// let obj={
//     empname:'eswar',
//     empage:23,
//     empsal:'29k',
//     empdes:'se'

// };
// let {empname,empage,empsal,empdes}=obj;
// console.log(empname);


//map
// let arr=[2,3,4,8,9]
// arr.map((ele)=>{
//     console.log(ele*2);
// })

// //filter
// arr.filter((e)=>
// {
//     if(e%2==0)
//     {
//         console.log(e);
//     }
// })


// //reduce
// let arr1=arr.reduce((store,data)=>{
//    return store+data;
// })
// console.log(arr1);

//sort





//api

// let data=[
    
//     {firstname:'deepak',lastname:'reddy',age:24},
//     {firstname:'eswar',lastname:'reddy',age:22},
//     {firstname:'teja',lastname:'reddy',age:23},
// ]


// data.map((ele)=>{
//    conmsole.log(ele.designation='software developer');
// })

// let data=new Promise(function(resolve,reject)
// {
// resolve(console.log("hello"))
// })

// let food='';
// let data1=new Promise((resolve,reject)=>
// {
// if(food!='')
// {
//     resolve("food is here ")
// }
// else{
//     reject("food is not here")
// }
// })
// console.log(data1)

// data1.then((err)=>console.log(err))
// data1.catch((err)=>console.log(err))

// let val=fetch("https:/api.github.com/users")
// // val.then(a=>a.json().then(res=>res.map(val1=>console.log(val1))))
// val.then(a=>a.json().then(res=>res.map(val1=>
//     {
//        let res= document.getElementById('val')
//        res.innerHTML+=`<p> ${val1.login}</p>`
//        res.innerHTML+=`<img src=${val1.avatar_url}>`
//     })))

// let pr=fetch("https://fakestoreapi.com/products")
// // pr.then(a=>a.json().then(res=>res.map(val1=>console.log(val1))))
// pr.then(a=>a.json().then(res=>res.map(res1=>{
//    let res=document.getElementById('val')
//    res.innerHTML+=`<p>${res1.title}</p>`
//    res.innerHTML+=`<img src=${res1.image}>`
//    let st=document.getElementsByTagName('img')
//    st[0].style.cssText='height:300px;width;300px'
//    res.innerHTML+=`<p>${res1.price}</p>`
// })))

// async function name1(){
//    return   setInterval(()=>
//    )
// }
// let x=name1()
// console.log(x.then(a=>console.log(a)));


let val=document.getElementById("val")
val.innerHTML="hello world"
val.style.color="red";
 
let val2=document.getElementsByClassName("debo")
val2[0].innerHTML="good night";

let val3=document.querySelectorAll('p')
val3[2].innerHTML="eswarreddy"

let ele=document.createElement("div")
ele.innerHTML="rupeswarreddy"
document.body.appendChild(ele);
ele.setAttribute("class","demo")
 ele.setAttribute("id","demo2")