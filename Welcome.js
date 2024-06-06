import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        const {name, alise}=this.props
    return (
    <div>
    <h1> Hello {name} also known as {alise}</h1>
    {this.props.children}
    </div>
    )
    }
}

export default Welcome
