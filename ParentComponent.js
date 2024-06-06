import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class parentComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        parentName: 'Parent'
      }
      this.greetParent= this.greetParent.bind(this)
    }
    greetParent(child){
        alert(`Hello ${this.state.parentName} from child class ${child}`)
    }
  render() {
    return (
        <div>
          <ChildComponent greetHandler={this.greetParent} />
        </div>
    )
  }
}
export default parentComponent