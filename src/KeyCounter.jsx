import React, { useState } from 'react';
const KeyCounter = () => {
  const [count, setCount] = useState(0);
  const [lastKey, setLastKey] = useState('None');

  const handleKeyDown = (event) => {
    setCount((prevCount) => prevCount + 1);
    setLastKey(event.key === ' ' ? 'Space' : event.key);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Key Press Tracker</h2>
      
 
      <div
        tabIndex="0"
        onKeyDown={handleKeyDown}
        style={{
          width: '300px',
          height: '150px',
          margin: '20px auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#6b6b6b',
          border: '2px dashed #e9edf1',
          borderRadius: '12px',
          cursor: 'pointer',
          outline: 'none',
          transition: 'border-color 0.2s'
        }}

        onFocus={(e) => (e.target.style.borderColor = '#a9d669')}
        onBlur={(e) => (e.target.style.borderColor = '#9fb3c8')}
      >
        <p style={{ color: '#e6e6e6', marginBottom: '5px' }}>
          Click here, then start typing!
        </p>
        <strong style={{ fontSize: '1.5rem', color: '#25c3c1' }}>
          Total Presses: {count}
        </strong>
      </div>

      <div style={{ marginTop: '10px', color: '#ecf314' }}>
        Last key detected: <code style={{ background: '#7d7d7d', padding: '2px 6px' }}>{lastKey}</code>
      </div>
    </div>
  );
};

export default KeyCounter;
