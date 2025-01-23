import React, { useState } from 'react'

function ConditionalRendering() {
    let[state,setstate]=useState(false)
 let change= ()=>{
    setstate(state=true)
 }
 let msg;
//  if(state)
//  {
//     msg= <div>'hello world</div>
//  }
//  else{
//     msg=<div>good bye</div>
//  }
//   msg=state?'helloworld':'goodbye'
msg=state&&'helloworld'
return(
    <>
    <h1>{msg}</h1>
    <button onClick={change}>click</button>
    </>
)}
export default ConditionalRendering
