import React, { Component } from 'react'

class Counter1 extends Component {
  render() {
    const{count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>clicked{count}times</button>
      </div>
    )
  }
}

export default Counter1
