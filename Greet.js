import React from "react"

// function Greet(){
//     return <h1> Hello Pooja </h1>
// }
const Greet= (props) => {
const {name,alise}=props
return (
    <div>
    <h1> Hello {name} also known as {alise}</h1>
    {props.children}
    </div>
)
}
export default Greet
