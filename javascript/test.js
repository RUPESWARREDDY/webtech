// // let arr=[1,2,3,4,7,4,8,7,8,4,6]
// // arr.pop()
// // arr.push("eswar")
// // arr.unshift("subbu")
// // console.log(arr);
// // let obj={}
// // let obj1=new Object();
// // obj.name="eswar"
// // obj.name="rupesh"
// // console.log(obj);
// let arr=[45,67,87,34,68,72]

// let odd=arr.filter(a=>{
//     return a%2
   
// })
// console.log(odd)
// let even=arr.filter(a=>{
//     return a%2==0
   
// })
// console.log(even)


// let a2=[2,4,4,4,7,8];
// let s=new Set(a2)
// console.log(s1);
// function fun(){
//     console.log("hello")
// }
// fun()

// let b=()=>{
//     console.log("world")
// }
// b()
// let obj={
//     name:"abcd",
//     x:[2,3,4,5,8]
// }
// let rr=obj.x.sort((a,b)=>{
//     return a.x-b.x
// })
// console.log(rr)
// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
// console.log(uniqueArray);
// let st="eswarreddy".split("")
// let res=st.filter((item,index)=>
//     st.indexOf(item)===index);
// console.log(res);

// let a=[

//     {

//         "id": 1,

//         "name": "John Doe",

//         "email": "johndoe@example.com",

//         "role": "Admin",

//         "status": "Active"

//     },

//     {

//         "id": 2,

//         "name": "Jane Smith",

//         "email": "janesmith@example.com",

//         "role": "User",

//         "status": "Inactive"

//     },

//     {

//         "id": 3,

//         "name": "Emily Johnson",

//         "email": "emilyj@example.com",

//         "role": "Moderator",

//         "status": "Active"

//     },

//     {

//         "id": 4,

//         "name": "Michael Brown",

//         "email": "michaelb@example.com",

//         "role": "User",

//         "status": "Pending"

//     },

//     {

//         "id": 5,

//         "name": "Sarah Davis",

//         "email": "sarahd@example.com",

//         "role": "Admin",

//         "status": "Active"

//     }

// ]
// let res=a.map((b)=>{
//    let res=b.status==='Pending'?{...b,state:"hyderabad"}:{...b,state:"andhra"}
//    return res
// })
// console.log(res);
// let b = a.map((pavan,index)=>{
    //     if(pavan?.status==="Pending"){
    //         return {...pavan,city:"kakinada"}
     
    //     }
    //     else{
    //         return {...pavan,city:"Pulivendula"}
    //     }
    // })
// const sentence ="The quick brown fox jumps over the lazy dog"
// let res=sentence.find((...a)=>{
//     return Math.max(a.length)

// })
// console.log(res);
// let  num=12345222 ,print output in below format { '1': 1, '2': 4, '3': 1, '4': 1, '5': 1 }
// let num=12345222
// let res1=num.toString();
// let j=0
// let obj={}
// for(let i=1;i<=5;i++)
// {
//     let res=res1.matchAll(res1[j])
    
// obj[i.toString()]=Array.from(res).length
// j++;
// }
// console.log(obj);
// sentence ="The quick brown fox jumps over the lazy dog"
// var str=sentence.split(" ")
// function largest() {
//   for (let index = 0; index < str.length; index++) {
//     if(str[index].length>4)
//     {
//         console.log(str[index])
//     }
    
//   }
// }
// largest()
// const task2 = "ABC"
// Output: ["ABC","ACB","BCA","BAC","CBA","CAB"]
// Hi Rupeswarreddy Please go through it
// const task2 = "ABC"
// let arr=[]
// for (let index = 0; index <6; index++) {
//   if(index==0)
//   {
//     arr.push(task2)
//   }
  
//   else if(index==1)
//   {
//     let res=[]
    
//     let array=task2.split("")
    
//     for (let index1 = 0; index1 < array.length; index1++) {
//         if(array[index1]=='A')
//         {
//             res.push(array[index1])
//         }
//         else if(array[index1]=='B')
//         {
//             res.push(array[index1+1])
//         }
//         else{
//            res.push(array[index1-1])
//            arr.push(res.join(""))
//         } 
//     }
//   }
//   else if(index==2)
//   {
//     let res=[]
    
//     let array=task2.split("")
    
//     for (let index1 = 0; index1 < array.length; index1++) {
//         if(array[index1]=='A')
//         {
//             res.push(array[index1+1])
//         }
//         else if(array[index1]=='B')
//         {
//             res.push(array[index1+1])
//         }
//         else{
//            res.push(array[index-2])
//            arr.push(res.join(""))
//         } 
//     }
//   }
//   else if(index==3)
//     {
//       let res=[]
      
//       let array=task2.split("")
      
//       for (let index1 = 0; index1 < array.length; index1++) {
//           if(array[index1]=='A')
//           {
//               res.push(array[index1+1])
//           }
//           else if(array[index1]=='B')
//           {
//               res.push(array[index1-1])
//           }
//           else{
//              res.push(array[index1])
//              arr.push(res.join(""))
//           } 
//       }
//     }
//     else if(index==4)
//         {
//           let res=[]
          
//           let array=task2.split("")
          
//           for (let index1 = 0; index1 < array.length; index1++) {
//               if(array[index1]=='A')
//               {
//                   res.push(array[index1+2])
//               }
//               else if(array[index1]=='B')
//               {
//                   res.push(array[index1])
//               }
//               else{
//                  res.push(array[index1-2])
//                  arr.push(res.join(""))
//               } 
//           }
//         }
//         else if(index==5)
//             {
//               let res=[]
              
//               let array=task2.split("")
              
//               for (let index1 = 0; index1 < array.length; index1++) {
//                   if(array[index1]=='A')
//                   {
//                       res.push(array[index1+2])
//                   }
//                   else if(array[index1]=='B')
//                   {
//                       res.push(array[index1-1])
//                   }
//                   else{
//                      res.push(array[index1-1])
//                      arr.push(res.join(""))
//                   } 
//               }
//             }
    
// }
// console.log(arr);

// let data = {

//   students: [

//     {

//       name: 'rajesh',

//       id: 1,

//       salary: 20000,

//       designation: 'angular',

//     },

//     {

//       name: 'devi',

//       id: 2,

//       salary: 10000,

//       designation: 'angular',

//     },

//     {

//       name: 'sathya',

//       id: 3,

//       salary: 20000,

//       designation: 'react',

//     },

//     {

//       name: 'rajeshwari',

//       id: 4,

//       salary: 30000,

//       designation: 'react',

//     },

//   ],

//   college: 'sdv',

//   cities: ['nellore', 'kurnool', 'guntur', 'hyderabad'],

// };
 
 
 
 
// o/p:    students: [

//     {

//       name: 'rajesh',

//       id: 1,

//       salary: 20000,

//       designation: 'angular',
//       city:'nellore'

//     },

//     {

//       name: 'devi',

//       id: 2,

//       salary: 10000,

//       designation: 'angular',
//       city:'kurnool'

//     },

//     {

//       name: 'sathya',

//       id: 3,

//       salary: 20000,

//       designation: 'react',
//       city:'guntur'

//     },

//     {

//       name: 'rajeshwari',

//       id: 4,

//       salary: 30000,

//       designation: 'react',
//       city:'hyderabad'

//     },

//   ],
 
 
 
// Note:  city key may be static but the value in city must be dynamic
// let data = {

//       students: [
    
//         {
    
//           name: 'rajesh',
    
//           id: 1,
    
//           salary: 20000,
    
//           designation: 'angular',
    
//         },
    
//         {
    
//           name: 'devi',
    
//           id: 2,
    
//           salary: 10000,
    
//           designation: 'angular',
    
//         },
    
//         {
    
//           name: 'sathya',
    
//           id: 3,
    
//           salary: 20000,
    
//           designation: 'react',
    
//         },
    
//         {
    
//           name: 'rajeshwari',
    
//           id: 4,
    
//           salary: 30000,
    
//           designation: 'react',
    
//         },
    
//       ],
    
//       college: 'sdv',
    
//       cities: ['nellore', 'kurnool', 'guntur', 'hyderabad'],
    
//     };
//     data.students.forEach((student, index) => {
//       student.city = data.cities[index];
// //     });
    
// //     console.log(data.students);
// let names = [
//   { name: 'kiran', age: 20, dg: 'manager' },
//   { name: 'ramya', age: 22, dg: 'associate' },
//   { name: 'aadhya', age: 25, dg: 'HR' },
//   { name: 'Keerthana', age: 25, dg: 'Trainee' },
//   { name: 'Shruthi', age: 25, dg: 'manager' },
// ]; 
// // display the name and dg who as name length greater than 5 characters and dg="Manager"
// names.forEach((a)=>{
//   if(a.name.length>5 && a.dg=='manager')
//   {
//     console.log(a.name+" "+a.dg);
//   }})

// const array1 = [1, 2, 3, 4, 1, 2, 5, 6, 8, 9, 10,8];
// const array2 = [3, 4, 5, 6, 2, 3, 4, 6, 2, 1, 3, 9];
// let ar3=[]
// let ot=[]
// for(let x in array1)
// {
//   for(let y in array2)
//   {
//     if(x==y)
//     {
//       ar3.push(array2[y])
//     }
//   }
// }   
// ar3.forEach((item,index)=>{
//  if(ar3.indexOf(item)==index)
//  {
//   ot.push(item)
//  }
// })
// console.log(ot);
// function a1() {
//   console.log("hello");
// function a2() {
//   console.log("world");
// }  
// }
// a1()
//through the task , hide and show the text(hello world) when we click on button using javascript and html

// let y=document.querySelector("button")
//   y.addEventListener("click",show)
//   y.addEventListener("dblclick",show1)
// function show(){
//   let x=document.getElementById("text")
//   x.style="display:none"
// }
// function show1(){
//   let x=document.getElementById("text")
//   x.style="display:block"
// }
// go through this task individually let a=[1,2,3,4,5](display the sum of alternative numbers) display output as Output:1+3+5=9 & 2+4=6 , everybody do it in different ways
// let a=[1,2,3,4,5]
// let even=0
// let odd=0
// let s=""
// let o=""
// for (let x  in a)
// {
//   if(a[x]%2==0)
//   {
//     even+=a[x]
//    s=s.concat(a[x],"+")
//   }
//   else{
//     odd+=a[x]
//     o=o.concat(a[x],"+")
//   }
// }
// let res=s.split("")
// res.pop()
// let t=res.join("")
// let res1=o.split("")
// res1.pop()
// let t1=res1.join("")
// console.log(`${t}=${even}`);
// console.log(`${t1}=${odd}`);

// try{
//     adlert("welocme gueszst"); throw("its not keyword")
// }
// catch(err)
// {
//   console.log(err.message);
// }
// finally{
//     console.log("end")
// }
objectsArray = [ { id: 1, name: 'Alice' }, 
    { id: 2, name: 'Bob' },
     { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' }, 
      { id: 2, name: 'Bob' } ];
   
const uniqueArray = objectsArray.filter((value, index, self) =>
 {
       return( index === self.findIndex((t) => (
       
      t.id === value.id
    )))}
  );
  
  console.log(uniqueArray);
  
  
    //  arr = [1,2,3,1,2,4,5]
    //  let a=arr.filter((a,i)=>{
    //     if(arr.indexOf(a)==i)
    //     return a
    //  })
    //  console.log(a);
 
 