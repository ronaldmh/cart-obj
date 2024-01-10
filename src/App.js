import React from 'react';
import './App.css';
import Map from './Map';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Street Objects</h2>
      </header>

      <main>

      <div>
        <h3>Map Search</h3>
        <Map/>        
      </div>
      <div>
        <iframe width="100%" height="600px" src="https://www.arcgis.com/apps/dashboards/36a003b733f34e26a7a08290ba3bf0ef" frameborder="0" scrolling="no"></iframe>
        <a href='https://arcg.is/1bG4j50' target="_blank" rel="noopener noreferrer">Abrir Dashboard
          </a>
      </div>
      <div>
        <a></a>  
      </div>       
      </main>
    </div>
    
  );
}

export default App;
