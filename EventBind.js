import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
      super()
      this.state = {
         message : 'Hi'
      }
      this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler =()=>{
        this.setState({
            message: 'Bye'
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind