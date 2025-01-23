import React, { useState } from 'react'

function UseSateUsingObject() {
    const[name,setname]=useState({firstname:'',lastname:''})
  return (
    <div>
      <form action="">
        <input type="text" value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})} />
        <input type="text" value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})} />
      </form>
      <h2>your name is:{name.firstname}</h2>
      <h2>your name is:{name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default UseSateUsingObject
