import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    Increment()
    {
        this.setState(prev=>({
            
          counter:prev.counter+1
        }))
    }
  render() {
    return (
      <div>
        <h1>counter:{this.state.counter}</h1>
        <button onClick={()=>this.Increment()}>Incre</button>
      </div>
    )
  }
}

export default Counter
