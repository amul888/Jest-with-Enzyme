import React, { useState } from "react";


const ClickCounter = () => {
  const [count, handleCounter] = useState(0);
  return (
    <div style={{textAlign:"center"}}>
      <h1>The count is {count}</h1>
      <button onClick={() => handleCounter(count + 1)}>increment counter</button>
    </div>
  )
};
export default ClickCounter;