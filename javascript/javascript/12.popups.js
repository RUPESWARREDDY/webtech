function fullname(){
    let fname=prompt('enter first name');
    if(fname===''||fname===null){
      let isbool=confirm("do you want to close");
      if(isbool){
      alert("thank you")
      }
      else
      {
       fullname()
      }
    }
    else
    {
        alert("my name is:"+fname)
    }

    let lname=prompt('enter second name');
    alert(`my name is ${fname} ${lname}`)
   confirm("completed")
}
function loc(){
    window.location="goddetiRupeswarreddy"
}
function fullname(){
    let fname=prompt('enter first name');
    if(fname===''||fname===null){
      let isbool=confirm("do you want to close");
      if(isbool){
      alert("thank you")
      }
      else
      {
       fullname()
      }
    }
    else
    {
        alert("my name is:"+fname)
    }
}
function fullname(){
    let fname=prompt('enter first name');
    if(fname===''||fname===null){
        confirm("do you want to close")?alert("thank you"):fullname()
    }
    else
    {
        alert("my name is:"+fname)
    }
}