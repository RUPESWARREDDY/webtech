///Array Destructuring
let  arr = [10,2,4,5,8,1,9,0,7,3,6]

let [ten,two,four,five,eight,one,nine,zero,seven,three,six] = arr
console.log(six);

// //Object Destructuring
let personObj = {
    fName : "Dinga",
    lName  : "raja",
    age : 25
   }

   console.log(personObj);
   console.log(personObj.age)

   let {fName,lName,age} = personObj
   console.log(age);

//Spread Operator
let x = [10,20,30,40]
let y = [15,25,35,45]
let z = [x,y]
console.log(z)   //[10,20,30,40],[15,25,35,45]
console.log(...z)  // [10,20,30,40] [15,25,35,45]

let s1 = [x,...y]
console.log(s1)   //[[10,20,30,40],15,25,35,45]

let s2 = [...x,y]
console.log(s2)    //[10,20,30,40,[15,25,35,45]]

let s3 = [...x,...y]
console.log(s3)//[10,20,30,40,15,25,35,45]

console.log(...s3);   //10 20 30 40 15 25 35 45

///Rest Operator

function num1(...x){ 
    console.log(...(x.map(elem => elem+5)))
}
num1(20,50,80,10,60,40,70,30)

function num(...a){
  console.log(...(a.sort((a,b) => a-b)))
  }
num(2,5,8,1,6,4,7,3)