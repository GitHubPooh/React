import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('regular render')
    return (
      <div>Regular Component {this.state.name}</div>
    )
  }
}

export default RegComp