import React, { useState, useEffect } from 'react';
const MultiplierCounter = () => {
  const [count, setCount] = useState(0);
  const [multiple, setMultiple] = useState(0);
 
  // useEffect runs every time 'count' changes
  useEffect(() => {
	setMultiple(count * 2);
	
	// Logic for side effects could go here (e.g., logging or API calls)
	console.log(`Count updated to: ${count}. Multiple is: ${count * 2}`);
  }, [count]); // Dependency array: only re-run if 'count' changes
 
  return (
	<div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
		<h2>31-Devesh Ghadigaonkar</h2>
  	
  	<div style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
    	<p>Base Counter: <strong>{count}</strong></p>
    	<p>Multiple (x2): <strong style={{ color: '#007bff' }}>{multiple}</strong></p>
  	</div>
 
  	<button
    	onClick={() => setCount(prev => prev + 1)}
    	style={{
      	padding: '10px 25px',
      	fontSize: '1rem',
      	backgroundColor: '#28a745',
      	color: 'white',
      	border: 'none',
      	borderRadius: '5px',
      	cursor: 'pointer'
    	}}
  	>
    	Increment
  	</button>
	</div>
  );
};
 
export default MultiplierCounter;
