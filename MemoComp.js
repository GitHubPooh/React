import React from 'react'

function MemoComp(name) {
    console.log('rendering momo comp')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)