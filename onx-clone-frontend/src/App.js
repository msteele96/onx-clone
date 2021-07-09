import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Map from './components/Map'
import PinContainer from './containers/PinContainer'
import MapContainer from './containers/MapContainer'
// import SignupForm from './components/SignupForm';
// import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <h1> OnX Clone</h1>
      {/* first render login page */}
      {/* remove login component and fetch pins, add route to identify where to fetch */}
      {/* display pins on map */}
      {/*  */}
      {/* <Router>
        <Route exact path="/" component={Map}/>
      </Router> */}
      <MapContainer />
      {/* <SignupForm /> */}
      {/* <LoginForm /> */}
      <PinContainer />
    </div>
  );
}

// fix routes

export default App;
