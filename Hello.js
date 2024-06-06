import React from 'react'

const Hello=()=>{
    // return (
    // <div>
    //     <h1>
    //         Hello Hello
    //     </h1>
    // </div>
    // );
    return React.createElement(
        'div',
        {id: 'helloo', className: 'helloHello'},
        React.createElement('h1',null, 'Hello React.createElement Method')
    )
    // return (
    // React.createElement('div', null, 'Hello React.createElement Method')
    // )
}
export default Hello