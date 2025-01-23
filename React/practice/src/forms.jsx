import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input:'',
         comment:'',
         topic:''
      }
    }
    handleUserChange=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.input}${this.state.comment}${this.state.topic}`)
        event.preventdefault();
    }
  render() {
    return (
        <form action="" onSubmit={this.handleSubmit}>
        <div>
        <label htmlFor="">username</label>
        <input type="text" value={this.state.input} onChange={this.handleUserChange} />
        </div>
        <div>
            <textarea name="" id="" value={this.state.comment} onChange={this.handleCommentChange}/>
        </div>
        <div>
            <label htmlFor="">Select</label>
            <select name="" id="" value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="React">react</option>
                <option value="angular">angular</option>
                <option value="vue">vue</option>
            </select>
        </div>
        <button type='submit'>submit</button>
  </form>
    )
  }
}

export default Forms
