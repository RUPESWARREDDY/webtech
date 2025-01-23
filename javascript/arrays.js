let a=[2,4,7,8,9,5,4,3]
// console.log(a.length)
// console.log(a.toString())
// console.log(a.at(2))
// console.log(a.join(""))
// console.log(a.pop())
// console.log(a.push(10))
// console.log(a.shift())
// console.log(a.unshift('eswar'))
// delete a[2]

// console.log(a.concat(":"))
// console.log(a.copyWithin(2,0,2))
// console.log(a.flat())
// console.log(a.splice(2,0,'eswar','reddy'))
// console.log(a.toSpliced(0,1))
// console.log(a.slice(2,4))
// console.log(a.indexOf(4))
// console.log(a.lastIndexOf(4))
// console.log(a.includes(65))
// let b=a.find(funs)
// console.log(b)
// function funs(a)
// {
//     return a>4
// }
// a.findIndex(funs)
// console.log(a.findLast(funs))
// console.log(a.sort())
// console.log(a.reverse());
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
  
//   let ab=cars.sort(function(a, b){return a.year - b.year});
//   console.log(ab);
let ab=a.reduceRight((a,b)=>{
    return a+b
})
console.log(ab)
  
