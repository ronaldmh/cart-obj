import React from 'react';
import './App.css';
import Map from './Map';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Test API ArcGis</h2>
      </header>

      <main>

      <div>
        <h3>Map Search</h3>
        <Map/>
      </div>        
      </main>
    </div>
    
  );
}

export default App;
