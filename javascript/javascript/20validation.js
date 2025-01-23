function validation(e){
  let fname=e.target[0].value
  let lname=e.target[1].value

  let inputfield=document.getElementsByTagName('input')
  let errmsz=document.getElementsByTagName('span')

  if(fname==='' || fname==='null')
  {
    inputfield[0].style.border='solid 1px red'
    errmsz[0].innerText='enter the data'
    errmsz[0].style.cssText=`color:red;font-style:italic;`
  }
  else if(lname==='' || lname==='null')
  {
    inputfield[1].style.border='solid 1px red'
    errmsz[1].innerText='enter the data'
    errmsz[1].style.cssText=`color:red;font-style:italic;`
}
event.preventDefault()
}
