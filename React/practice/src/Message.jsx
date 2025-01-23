import React, { Component } from 'react'

class Message extends Component {
   constructor(props)
   {
    super(props)
    this.state={
        message:"welcome eswar"
    }
   }
   Change(){
    this.setState({message:"good morning"})
   }
   
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.Change()}>click</button>
      </div>
    )
  }
}

export default Message
