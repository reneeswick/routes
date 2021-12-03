import React from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome';
import DynamicMap from '../DynamicMap/DynamicMap';

const App = () => {

  return (
    <main>
      <h1>Routes</h1>
      <div className="content-container">
        <Welcome />
        <DynamicMap />
      </div>
    </main>
  )
}

export default App;
