import React, { Component } from 'react'
import MethodsAsChild from './MethodsAsChild'
class Methodsasprops extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            parentName:"parentname"
        }
    }
    greetParent(){
        alert(`hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
        <MethodsAsChild greetParent={()=>this.greetParent()}/>
      </div>
    )
  }
}

export default Methodsasprops
