import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
   this.inputRef=React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}


