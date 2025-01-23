import React, { Component } from 'react'

class HoverCounter extends Component {
  render() {
    const{count,increment}=this.props
    return (
      <div>
        <button onMouseOver={increment}>hover{count}times</button>
      </div>
    )
  }
}

export default HoverCounter
