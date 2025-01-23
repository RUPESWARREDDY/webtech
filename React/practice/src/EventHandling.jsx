// import React from 'react'

// function EventHandling() {
//     function clickHandler(){
//         document.write("clicked button")
//     }
//   return (
//     <div>
//       <button onClick={clickHandler}>click</button>
//     </div>
//   )
// }

// export default EventHandling
import React, { Component } from 'react'

class EventHandling extends Component {
    clickHandler(){
        document.write("clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventHandling

