import React from 'react'
import Person from './Person'

function NameList() {
   const person=[
        {
            id:1,
            names: 'P',
            age: 30,
            skill:'React'  
        }, 
        {
            id:2,
            names: 'Q',
            age: 31,
            skill:'JS'  
        },
        {
            id:3,
            names: 'R',
            age: 32,
            skill:'Angular'  
        }
    ]
    const personList=person.map(person=> <Person person={person} />)

   return <div>{personList}</div>
}
export default NameList