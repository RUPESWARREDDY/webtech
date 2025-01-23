// import React, { Component } from 'react'

// class Parent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>i am {this.props.name}a.k.a{this.props.heroname}</h1>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default Parent
import React from 'react'

function Parent(props) {
  let{name,heroname}=props
  return (
    <div>
      {name}{heroname}
    </div>
  )
}

export default Parent

