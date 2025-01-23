let msd=()=>{
    return "helicopter landed"
}
let virat=()=>{
   return new Promise((resolve,reject)=>
   {
    setTimeout(()=>{
        resolve ("ei sala cup namdey")
    },1000)
   })
}
let abd=()=>{
    return "mr.360";
}
let gill=()=>{
    return "hunter"
}
let result=async()=>{
console.log(msd())
console.log(await virat())
console.log(abd())
console.log(gill())
}
result()
