import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log("...........................regular...................");
    return (
      <div>
        regularcomponent{this.props.name}
      </div>
    )
  }
}

export default RegularComponent
