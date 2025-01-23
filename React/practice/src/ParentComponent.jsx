import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponent1 from './PureComponent'
import Memo from './Memo'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'eswar'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'eswar'
            })
        },2000)
    }
  render() {
    console.log(".....................parent.............................");
    return (
      <div>
        parent component
        <RegularComponent name={this.state.name}/>
        <PureComponent1 name={this.state.name}/>
        <Memo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent
