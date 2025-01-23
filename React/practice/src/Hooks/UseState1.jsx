import React, { useState } from 'react'

export default function UseState1() {
    let initialstate=0
    let [state,setstate]=useState(initialstate)
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>setstate(prevstate=>prevstate+1)}>increment</button>
      <button onClick={()=>setstate(initialstate)}>reset</button>
      <button onClick={()=>setstate(prevstate=>prevstate-1)}>decrement</button>
    </div>
  )
}
