import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class Componentf extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {username=>{
                console.log(username)
                return <div>hello {username}</div>
            }}
        </UserConsumer>
      </div>
    )
  }
}

export default Componentf
