import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class CompF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            username=>{
                return <div>Hello {username}</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default CompF