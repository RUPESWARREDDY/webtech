// let arr=[10,20,30,40,50]
// // console.log(arr)
// console.log(typeof arr)
// console.log(arr[2])
// console.log(arr[5])
// //adding elements to array
// arr[6]=true
// // console.log(arr)
// console.log(typeof arr[5])
// console.log(typeof arr[6])
// //updating an array
// arr[3]='hello'
// console.log(arr)
// //deleting an array
// delete arr[2]
// console.log(arr)
// ///to check length of an array
// let arrin=arr.length
// console.log("array length is:"+arrin)

// function arr1()
// {
// let arr=['hi',100,true,'bye',200,false]
// for(let i=0;i<arr.length;i++)
// {
//     if(typeof(arr[i]) === 'number')
//     console.log(arr[i])
// }
// }
// arr1()

// //wap to display only even number from the array list
// let arr2=[10,11,12,13,14,15]
// for(let i=0;i<arr2.length;i++)
// {
//     if(arr2[i]%2==0)
//     console.log(arr2[i])
// }
// // //array methods
let array=[11,12,13,14,150,16,17]
// console.log(array)
//push method
// let p1=array.push('eswar')
// // console.log(array)
// console.log(p1)
// //pop method
// let r1=array.pop()
// console.log(r1)
// // console.log(array)
// //unshift method
// let s1=array.unshift(20)
// console.log(s1)
// // console.log(array)
// //shit method
// let s2=array.shift()
// console.log(s2)
// console.log(array)
// //splice method   deleting process 
// let s3=array.splice(2,2)
// console.log(s3)
// console.log(array)
// //adding
// let p=array.splice(2,0,'eswar','subbu')
// console.log(array)
// console.log(p)
// //updating
// let s4=array.splice(1,1,'puneeth')
// console.log(s4)
// console.log(array)

// //mapping
// for(let i=0;i<array.length;i++)
// console.log(array[i]+5)
// //(or)
// let res=array.map((elem)=>{ return elem+5})
// console.log(res)
// //(or)
// let res1=array.map(elem=> elem+5)
// console.log(res1)
//filtering
let res2=array.filter((elem)=>{return elem%2==0})
console.log(res2)
// // (or)
// let res3=[11,22,30,70,111,50,60]
// for(let i=0;i<res3.length;i++)
//    if(res3[i]%2==0)
//    console.log(res3[i])
// //reduce method
// let arr7=[9,2,7,4,10]
// let red=arr7.reduce((preval,curval)=>{return preval+curval})
// console.log(red)
//example
// let arr8=[9,2,7,4,10]
// let red1=arr8.reduce((preval,curval)=>{return preval*curval})
// console.log(red1)

//sort method()
// console.log(arr8)
// let x=arr8.sort((a,b)=>b-a)
// console.log(x)
// let y=arr8.sort((a,b)=>a-b)
// console.log(y)