import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PinContainer from './containers/PinContainer'
import MapContainer from './containers/MapContainer'
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <h1> OnX Clone</h1>
      <Router>
        <Route exact path="/">
          <ul style={{listStyle:'none'}}>
            <li><Link to="/login"><h3>Log In</h3></Link></li>
            <li><Link to="/signup"><h3>Sign Up</h3></Link></li>
          </ul>
        </Route>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/signup" component={SignupForm}/>
        <Route path="/users" component={MapContainer}/>
        <Route path="/users" component={PinContainer}/>
      </Router>
    </div>
  );
}


export default App;
