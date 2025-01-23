// import React, { Component } from 'react'

// class Destructring extends Component {
    
//   render() {
//   let {name,heroname}=this.props
//     return (
//       <div>
//         <h1>{name}{heroname}</h1>
//       </div>
//     )
//   }
// }

// export default Destructring
// import React from 'react'

// function Destructring(props) {
//   return (
//     <div>
//       <h1>{props.name} is {props.heroname}</h1>
//     </div>
//   )
// }

// export default Destructring
import React from 'react'

function Destructring({name,heroname}) {
  return (
    <div>
      <h1>{name}{heroname}</h1>
    </div>
  )
}

export default Destructring


