import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [state, setState] = useState(1);

  return (
    <div>
    <h1 className="text-3xl font-bold underline">
      {state}
    </h1>
    <button onClick={() => setState(state + 1)}>
      click
    </button>
    </div>
  )
}

export default App;
