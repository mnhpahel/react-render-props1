import React from "react";

const ClickCounter = (props) => {
    const {count, incrementCount} = props
  return (
    <div>
      <button type="button" onClick={incrementCount}>Clicked Times {count}</button>
    </div>
  );
};

export default ClickCounter;
