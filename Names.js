import React from 'react'

function Names({heroName}) {
    if(heroName ==='Jokar'){
        throw new Error('Not a hero')
    }
  return (
    <div>
        {heroName}
    </div>
  )
}

export default Names