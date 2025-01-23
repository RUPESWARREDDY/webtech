import React, { Component } from 'react'
import RefsWithClassComponents from './RefsWithClassComponents'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
    
     this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <RefsWithClassComponents ref={this.componentRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default FocusInput
