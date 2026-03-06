// Component1.jsx
import React, { useState, createContext, useContext } from 'react';

// 1️⃣ Create Context
const UserContext = createContext();

// 3️⃣ Component3 (Deepest Child)
const Component3 = () => {
  const { role } = useContext(UserContext);

  return (
    <div style={{ marginTop: '10px', color: '#666', paddingLeft: '15px' }}>
      <p>
        System access level: <strong>{role}</strong>
      </p>
      <small>(Data retrieved directly from Context in Component 3)</small>
    </div>
  );
};

// 2️⃣ Component2 (Middle Component)
const Component2 = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '15px 0' }}>
      <h3>Component 2</h3>
      <p>
        Hello again, <b>{user}</b>! I am the middle component.
      </p>
      <hr />
      <Component3 />
    </div>
  );
};

// 1️⃣ Component1 (Top-Level Provider)
export default function Component1() {
  const [user, setUser] = useState('Devesh Ghadigaonkar');
  const [role, setRole] = useState('Administrator');

  return (
    <UserContext.Provider value={{ user, role }}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Component 1</h1>
        <h2>Welcome, {user}!</h2>

        <Component2 />

        {/* Update user dynamically */}
        <button
          onClick={() => setUser('Dev')}
          style={{
            padding: '10px 15px',
            marginTop: '10px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Change User
        </button>
      </div>
    </UserContext.Provider>
  );
}