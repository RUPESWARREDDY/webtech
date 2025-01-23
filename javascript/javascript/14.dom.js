function changecontent(){
    let x=document.getElementById("cc")
    x.innerText="good night"
    x.style.color="red";
}
function text(){
    let x=prompt("enter name:")
    let y=prompt("enter last name:")
    let z=document.getElementById("txt1")
    z.innerText="my name is "+x+y;
    z.style.cssText=`color:yellow;
                     background:pink;
                     text-align:center`

}
