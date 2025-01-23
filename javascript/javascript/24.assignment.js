function turnon(){
document.getElementsByTagName('img')[0].src="./images/bulb on.jpeg";
}
function turnoff(){
    document.getElementsByTagName('img')[0].src="./images/bulboff.jpeg";
    }

function onOff(){
    let x=document.getElementsByTagName('button')
    let res=x[2].classList.toggle('added')
     res?x[2].innerText="off":x[2].innerText="on";
     if(res){
        document.body.style.cssText=`color:white;background:black`;
     }
     else{
        document.body.style.cssText=`background:white`;
     }
}