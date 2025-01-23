import React from 'react'

function MethodsAsChild(props) {
  return (
    <div>
      <button onClick={props.greetParent}>click</button>
    </div>
  )
}

export default MethodsAsChild
