import React from 'react';
import DriverMap from '../DriverMap/DriverMap';
import Welcome from '../Welcome/Welcome';

const App = () => {

  return (
    <main>
      <h1>Routes</h1>
      <div className="content-container">
        <Welcome />
        <DriverMap />
      </div>
    </main>
  )
}

export default App;
