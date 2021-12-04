import React from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome';
import DynamicMap from '../DynamicMap/DynamicMap';
import Header from '../Header/Header';

//comment

const App = () => {

  return (
    <main>
      <Header />
      <div className="content-container">
        <Welcome />
        <DynamicMap />
      </div>
    </main>
  )
}

export default App;
