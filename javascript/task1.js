let list=[]
let getdata=(e)=>{
    let ul=document.getElementById("ul")
     let li=document.createElement("li")
   let bt1=document.createElement("span")
    let name=e.target[0].value
    if(name==="")
    {
        alert("Enter data")
    }
    else{
    list.push(name);
    bt1.innerText="X"
    list.map((std,index)=>{
        li.innerText=std
        li.appendChild(bt1)
        ul.appendChild(li)
        li.setAttribute('id', 'data'+(index+1));

})
document.getElementById("myform").reset();
    }
    e.preventDefault()
}

ul.addEventListener("click",function(e){
 
    console.log(e,'target')
    if(e.target.tagName==="LI"){
      e.target.classList.toggle("checked")
      let sel=e.target.value
      console.log(sel);
    }
    else if(e.target.tagName==="SPAN"){
        
        e.target.parentElement.remove();

        // list.forEach((e)=>{
        //     if(e==)
        // })
    }

    
});

