import React from 'react'

const KeyUpCounter = (props) => {
    const {count, incrementCount} = props;

  return (
    <div>
         <button type='button' onKeyUp={incrementCount}>KeyUp Times {count}</button>
    </div>
  )
}

export default KeyUpCounter