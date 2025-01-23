let obj={}
console.log(typeof obj);
//object creation
let car={
    cName:"ford",
    ccolor:"blue",
    cmilage:15
}
console.log(car)

//dot operator
let cn=car.cName
console.log(cn)
//subscript operator
let cm=car["cmilage"]
console.log(cm)
console.log(car["ccolor"])

//modification of javaScript object
//adding properties to the object
car.cRegNo=" Ap04 aa 6322"
console.log(car)

//upating the property value
car.ccolor="yellow"
console.log(car)
//delete object
delete car.cmilage
console.log(car)


//*****************************************************************************************************************************
//object creation using new keyword
//new keyword
let n= new Number()
console.log(typeof n)

let s= new String()
console.log(typeof s)

let b= new Boolean()
console.log(typeof b)

let o=new Object()
console.log(typeof o)

let a= new Array()
console.log(typeof a)

let car1=new Object()
console.log(car1);
car1.cname="bmw"
car1.ccolor="black"
console.log(car1)
//*****************************************************************************************************************************
//object creation using constructor function

function Fun(){
}
console.log(typeof Fun())
let f=new Fun()
console.log(typeof f)

function Person(){
    this.fnm="eswar"
    this.lnm="reddy"
}
let p1=new Person()
console.log(p1)


function Persons(fnm,lnm){
this.fname=fnm
this.lname=lnm
}
let ps1=new Persons("eswar","reddy")
let ps2=new Persons("puneeth","reddy")
console.log(ps1)
console.log(ps2)

function Movie(mname,mrelease,mhero,mheroine,msinger){
    this.moviename=mname
    this.movierelease=mrelease
    this.moviehero=mhero
    this.movieheroine=mheroine
    this.moviesinger=msinger
}
let m1=new Movie("leo","23-04-2021","vijay","ileeyana","sp bala")
let m2=new Movie("bro","29-07-2023","sai tharun tej","spandhana","sp bala")
console.log(m1)
console.log(m2)

let Personobj={
    fname:"eswar",
    lname:"reddy",
    dob:2000,
    fullname:function(){
        let res=`my name is ${this.fname}${this.lname}`
        console.log(res)
    },
    calculateage:function(){
       let  age=2023-this.dob
        console.log(age)
    }
}
console.log(Personobj)
Personobj.fullname()
Personobj.calculateage()
 function esw(fnm,lnm){
    this.fname=fnm;
    this.lname=lnm;
  
 }
 let bb=new esw('eswar','reddy')
 console.log(bb.ls="rrr")
 console.log(bb)

