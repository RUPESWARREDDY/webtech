// var a=10;
// let b=20;
// const c=30;
// console.log(a,b,c)

if(1)
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a,b,c)   
}
console.log(a)
// console.log(b)
function fun()
{
     a=10;
    let b=20;
    const c=30;
    console.log(a,b,c)
    return a
}
let res=fun()
console.log(res)

let arr=[10,20,30,40,50]
for(let keys in arr)
{
    console.log(keys)
}
let arr1=[10,20,30,40,50]
for(let keys of arr1)
{
    console.log(keys)
}
let obj={
    fname:'eswar',
    lname:'reddy',
    age:50
}
for(let keys of Object.values(obj))
{
    // console.log(obj[keys])
    console.log(keys)

}
for(let keys in obj)
{
//    console.log(keys)
    console.log(obj[keys])

}
