import React, { Component } from 'react'

class RefsWithClassComponents extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef=React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default RefsWithClassComponents
