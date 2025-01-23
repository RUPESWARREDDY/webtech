
//math.random&floor
function num1(){
    let rand=Math.random()*10000
    console.log(rand);
    let res=Math.floor(rand)
    if(res>=1000 && res<=9999)
    {
        // console.log(res)
    }
    else{
        num1()
        }
}
num1()

//another
// function num1(){
//     let res=Math.floor(Math.random()*10000)
//     res>=1000 && res<=9999?console.log(res): num1()
// }
// num1()