import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import Form from './components/Form/Form';




function App() {

  
  return (
   
    <div className='App'>

      <div className='header'>
        <Header/>
      </div>      

      <div className='container'>

        <div className='list-container'>
          <List/>
        </div>

        <div className='map-container'>
          <Map/>
        </div>

        <div>
        <Form/>
      </div>

        
      </div>
      
    </div>



  );
}

export default App;