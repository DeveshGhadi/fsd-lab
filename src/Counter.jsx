import React, { useState } from 'react'

export const Counter = ({ startValue = 0, color = "blue" }) => {
  const [count,setCount] = useState(startValue);
  return (
    <div style={{color}}>
        <h2>{count}</h2>
        <button onClick={() => {setCount(count + 1)}}>Increase</button>
        <button onClick={() => {setCount(count - 1)}}>Decrease</button>
      </div>
  )
}

// function Counter({ startValue = 0, color = "blue" }) {
//   const [count, setCount] = useState(startValue);

//   return (
//     <div style={{ color }}>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
//       <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
//     </div>
//   );
// }

// export default Counter;
