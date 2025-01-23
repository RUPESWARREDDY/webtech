import React from 'react'

function Memo({name}) {
    console.log('rendeering memo component');
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memo)
