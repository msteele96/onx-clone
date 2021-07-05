import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Map from './components/Map'
import PinContainer from './containers/PinContainer'

function App() {
  return (
    <div className="App">
      <h1> OnX Clone</h1>
      <Router>
        <Route exact path="/" component={Map}/>
      </Router>
      <PinContainer />
    </div>
  );
}

// fix routes

export default App;
