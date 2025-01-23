function box1(){
    let selectele=document.getElementsByClassName("box");
    selectele[0].style.cssText="background:red";
    selectele[1].innerText=`WELCOME`
    selectele[2].style.cssText=`background:orange;
                                border-radius:50%`
    let selectedimg=document.getElementsByTagName('img');
    selectedimg[0].src="./images/channels4_profile(12).jpg";
}
function doubleclick(){
    let selectele=document.getElementsByClassName("box");
    selectele[0].style.cssText="background:purple";
    selectele[1].innerText=`i love farming`
    selectele[2].style.cssText=`background:aqua;
                                border-radius:50%`
                                let selectedimg=document.getElementsByTagName('img');
                                selectedimg[0].src="./images/channels4_profile(13).jpg";
}
function printdata(event){
    let fname=document.getElementsByName('fnm')[0].value
    let lname=document.getElementsByName('lnm')[0].value
    let displaydata=document.getElementById('res')
    displaydata.innerText=`my name is ${fname} ${lname}`
    event.preventDefault()
}
function add(){
    let x=Number(prompt("enter a number"))
    let y=Number(prompt("enter a number"))
    let z=document.getElementById("sum")
    z.innerText=`${x}+${y}=${x+y}`
}
function colors(){
    // let col1=prompt("eneter a color")
    // let res=document.getElementById("col")
    // res.style.backgroundColor=col1;

     // let col1=prompt("eneter a color")
    //  document.getElementById("col").style.backgroundColor=col1

    // document.getElementById('col').style.backgroundColor=prompt("enter a color")

    document.body.style.backgroundColor=prompt("enter a color")

}
function tcol(){
let col=prompt("enter a color")
switch(col)
{
case "yellow":document.getElementsByTagName('th')[0].style.backgroundColor=col;
            break;
case "blue":document.getElementsByTagName('th')[1].style.background=col;
            break;
case "red":document.getElementsByTagName('th')[2].style.background=col;
            break;
case "green":document.getElementsByTagName('th')[3].style.background=col;
            break;
case "black":document.getElementsByTagName('th')[4].style.background=col;
            break;
case "pink":document.getElementsByTagName('th')[5].style.background=col;
            break;
    default:alert("invalid color");
}
}
function changeimg(){
  document.querySelector('img').src="./images/channels4_profile(12).jpg";
}

function btnValue(){
    let x=document.querySelector('button').innerText
    if (x==='Day Mode')
    {
    document.querySelector('button').innerText='Night Mode'
    document.body.style.background='black';
    }
    else
    {
    document.querySelector('button').innerText='Day Mode'
    document.body.style.background='white';
    }

}
let x=document.createElement('h1')
x.innerHTML='eswar'
document.body.appendChild(x)

let y=document.getElementsByTagName('div')
y[0].classList.add('box5')
Document.body.appendChild(y)