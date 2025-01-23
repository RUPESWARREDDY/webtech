//ouput is "http, localhost,33002"
// let strt="http://localhost:33002/";
// let str2=strt.substr(0,4).concat(" ",strt.substr(7,9)).concat(" ",strt.substr(17,5)).split(" ")
// console.log(str2)
//--------------------------------------------------------------------------
//output:-[90,29,92,292,"developers"]
// const b= [90,29,92,292]
// const c = "developers";
// const d = []
// d.push(...b)//spread operator
// d.push(c)
// console.log(d)
// //-------------------------------------------------------------------------------
// //output:  "egaugnal gnitpircs a si tpircsavaj"
// const str="Javascript is a scripting language"
// let arr=[];
// for(let i=str.length-1;i>=0;i--)
// {
//   arr.push(str[i])
  
// }
// console.log(arr.join(""))
 
//  //another Method
//  console.log(str.split("").reverse().join(""))
//  //-------------------------------------------------------------------------
//  const url = "https://stackblitz.com/edit/js-impmdn?file=index.js"
// // output: {file: index.js}
// let y=url.match("index.js").join("")
// let x=url.match("file")
// let obj={}
// obj[x]=y
// console.log(obj)
// //--------------------------------------------------------------------------------------
// // let  num=12345222 ,print output in below format { '1': 1, '2': 4, '3': 1, '4': 1, '5': 1 }
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
// // -------------------------------------------------------------------------------------------
// // const task2 = "ABC"
// // Output: ["ABC","ACB","BCA","BAC","CBA","CAB"]
// // Hi Rupeswarreddy Please go through it
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
// // --------------------------------------------------------------------------------------- 
// // o/p:    students: [

// //     {

// //       name: 'rajesh',

// //       id: 1,

// //       salary: 20000,

// //       designation: 'angular',
// //       city:'nellore'

// //     },

// //     {

// //       name: 'devi',

// //       id: 2,

// //       salary: 10000,

// //       designation: 'angular',
// //       city:'kurnool'

// //     },

// //     {

// //       name: 'sathya',

// //       id: 3,

// //       salary: 20000,

// //       designation: 'react',
// //       city:'guntur'

// //     },

// //     {

// //       name: 'rajeshwari',

// //       id: 4,

// //       salary: 30000,

// //       designation: 'react',
// //       city:'hyderabad'

// //     },

// //   ],
 
 
 
// // Note:  city key may be static but the value in city must be dynamic
// let data = {

//     students: [
  
//       {
  
//         name: 'rajesh',
  
//         id: 1,
  
//         salary: 20000,
  
//         designation: 'angular',
  
//       },
  
//       {
  
//         name: 'devi',
  
//         id: 2,
  
//         salary: 10000,
  
//         designation: 'angular',
  
//       },
  
//       {
  
//         name: 'sathya',
  
//         id: 3,
  
//         salary: 20000,
  
//         designation: 'react',
  
//       },
  
//       {
  
//         name: 'rajeshwari',
  
//         id: 4,
  
//         salary: 30000,
  
//         designation: 'react',
  
//       },
  
//     ],
  
//     college: 'sdv',
  
//     cities: ['nellore', 'kurnool', 'guntur', 'hyderabad'],
  
//   };
//   data.students.forEach((student, index) => {
//     student.city = data.cities[index];
//   });
  
//   console.log(data.students);
//   //----------------------------------------------------------------------------------
//   let names = [
//     { name: 'kiran', age: 20, dg: 'manager' },
//     { name: 'ramya', age: 22, dg: 'associate' },
//     { name: 'aadhya', age: 25, dg: 'HR' },
//     { name: 'Keerthana', age: 25, dg: 'Trainee' },
//     { name: 'Shruthi', age: 25, dg: 'manager' },
//   ]; 
//   // display the name and dg who as name length greater than 5 characters and dg="Manager"
//   names.forEach((a)=>{
//     if(a.name.length>5 && a.dg=='manager')
//     {
//       console.log(a.name+" "+a.dg);
//     }})
//     //------------------------------------------------------------------------------------
//     const array1 = [1, 2, 3, 4, 1, 2, 5, 6, 8, 9, 10,8];
// const array2 = [3, 4, 5, 6, 2, 3, 4, 6, 2, 1, 3, 9];
// //common values
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
// //-------------------------------------------------------------
// //through the task , hide and show the text(hello world) when we click on button using javascript and html
// <body>
//   <p id="text">hello world</p>
//   <button>submit</button>
//   <script src="./test.js"></script>
// </body> 
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
// // go through this task individually let a=[1,2,3,4,5](display the sum of alternative numbers) display output as Output:1+3+5=9 & 2+4=6 , everybody do it in different ways
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
// //------------------------------------------------------------------------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         *{
//             background-color: whitesmoke;
//         }
//         form{
//             text-align: center;
//         }
//         input{
//        border: 2px solid black;
//        border-radius: 5px;
//        height: 20px;
//        width:300px;
//        color: gray;
//        margin: 5px;

//         }
//     </style>
// </head>
// <body>
//     <form action="" onsubmit="getdata(event)">
//         <input type="text" placeholder="enter name"><br>
//         <input type="Email" placeholder="Enter Email"> <br>
//         <button type="submit">submit</button>
//   </form>
//   <h1>All Students List</h1>
//   <button onclick="show()">email</button>
//   <ul>
    
//   </ul>
//   <script>
//       let students=[]
//       let emails=[];
//       console.log(emails)
//       let ul=document.querySelector("ul")
//       let ol=document.querySelector("ol")
  
//       let getdata=(e)=>{
//         console.log(e)
//           let li=document.createElement("li")
//           let li1=document.createElement("li")
//           let name=e.target[0].value
      
//           let email=e.target[1].value
  
//           students.push(name);
//           emails.push(email);
  
//           students.map((std)=>{
//               li.innerHTML=std
//               ul.appendChild(li)
//           emails.map((em)=>{
//               li1.innerHTML=em
//               ul.appendChild(li1)

//       })
//           });
//           e.preventDefault()
//       }
  
    
//   </script>
// </body>
// </html>
// --------------------------------------------------------------------------------------------
// let arry = ['rajiv:varma', 'shree:ram'];
//   // output: [{fname: "rajiv",lname: "varma"},{fname: "shree",lname: "ram"}]
//   let res=arry.map((a)=>{
//     let [fname,lname]=a.split(":")
//     return{fname,lname}
//   })
//   console.log(res)
// -------------------------------------------------------------------------------------------------
// let id=[1,2,3]
// let names=['tiru','anitha','devi']
// let department=['Mobility','React','Angular']
// let res=id.map((value,index)=>{
//     return{
//         id:value,
//         name:names[index],
//         department:department[index]
//     }
// })
// console.log(res);
//---------------------------------------------------------------------------------------------------------
// Input : let str = "ghdvdshfgdsvnfhsdfnsdgfvs";
//    Output : {d: 5,f: 4,g: 3,h: 3,n: 2,s: 5,v: 3}
// let str = "ghdvdshfgdsvnfhsdfnsdgfvs";

// let frequency={}
// for(let char of str)
// {
//    if(frequency[char])
//    {
//       frequency[char]++
//    }
//    else{
//        frequency[char]=1;
//    }
// }
// console.log(frequency)
//-------------------------------------------------------------------------
Input: arr = [
   {
     name: 'vishnu',
     age: 20,
     salary: 10000,
   },
   {
     name: 'ramu',
     age: 20,
     salary: 10000,
   },
   {
     name: 'sumanth',
     age: 20,
     salary: 10000,
   },
 ];
//  1st Output:[{age: 20,name: "ramu",salary: 10000},{age: 20,name: "sumanth",salary: 10000}]
//  2nd output: [{age: 20,name: "vishnu",salary: 20000},{age: 20,name: "sumanth",salary: 20000}]
//  3rd output: [{age: 20,name: "vishnu",salary: 20000, newcount: 20000},{age: 20,name: "sumanth",salary: 20000, newcount: 20000}]
// let output1 = arr.slice(1);
// console.log(output1);
//2ndoutput
// let res=arr.map((item,index)=>{
//    if(index===0||index===arr.length-1)
//    {
//       return {...item,salary:item.salary*2}
//    }
//    return item
// })
// console.log(res)
//3rd output
// let res1=arr.map((item,index)=>{
//    if(index===0||index===arr.length-1)
//    {
//       return{...item,salary:item.salary*2,newcount:item.salary*2}
//    }
//    return item
// })
// console.log(res1)
let arry = ['rupesh:varma', 'shree: lakshmi'];
//    output: [{fname: "rupesh",lname: "varma"},{fname: "shree",lname: "lakshmi"}]
let obj=[]
arry.forEach((a)=>{
    let c=a.split(":")
 let z=  {}
    z.fname=c[0]
    z.lname=c[1]
   obj.push(z)
})
console.log(obj)

// Input : let str = "ghdvdshfgdsvnfhsdfnsdgfvs";
  //  Output : {d: 5,f: 4,g: 3,h: 3,n: 2,s: 5,v: 3
//   let str = "ghdvdshfgdsvnfhsdfnsdgfvs";
//   let s=str.split("")
//   let obj={}
//   let d=[]
// s.forEach((s,index)=>{
//   if(str.indexOf(s)==index)
//   {
//    d.push(s)
//   }
// })
// for(let r of d)
// {
//   console.log(r)
//   let z=str.matchAll(r)
//   let f=Array.from(z).length
//    obj[r]=f;
// }
 
// console.log(obj)