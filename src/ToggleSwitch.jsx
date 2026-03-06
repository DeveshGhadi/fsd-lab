import { useState } from 'react'
import './App.css'
const ToggleSwitch = () => {
  // 1. Initialize state. 'isOn' is the value, 'setIsOn' is the function to change it.
  const [isOn, setIsOn] = useState(false);

  // 2. Define the toggle handler
  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  const themeStyles = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: isOn ? '#3b3b3b' : '#505050',
    borderRadius: '8px',
    border: `2px solid ${isOn ? '#48b238' : '#ed2222'}`,
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <h1>Switch {isOn ? 'ON' : 'OFF'}</h1>
      
      <button 
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: isOn ? '#48b238' : '#ed2222',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Turn {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
};

export default ToggleSwitch;
