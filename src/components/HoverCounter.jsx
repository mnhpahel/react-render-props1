import React from 'react'

const HoverCounter = (props) => {
    const {count, incrementCount} = props;
  return (
    <div>
        <h3 onMouseOver={incrementCount}>Hovered Times {count}</h3>
    </div>
  )
}

export default HoverCounter