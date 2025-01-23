import React, { PureComponent} from 'react'

export class PureComponent1 extends PureComponent {
  render() {
    console.log("--------------------pure--------------------")
    return (
      <div>
        pure{this.props.name}
      </div>
    )
  }
}

export default PureComponent1
