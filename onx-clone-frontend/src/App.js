import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PinContainer from './containers/PinContainer'
import MapContainer from './containers/MapContainer'
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm'
import { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from './actions/userActions';
import { addPin } from './actions/pinsActions';

class App extends Component {

  componentDidUpdate() {
    let id = this.props.user.user.data.id
    window.history.pushState( "state", "new route", `users/${id}`)
    // this.forceUpdate()
    // needs to be adjsuted to cause a component update
  }

  render() {
    return (
      <div className="App">
        <h1> OnX Clone</h1>
        <Router>
          <>
          <Route exact path="/">
            <ul style={{listStyle:'none'}}>
              <li><Link to="/login"><h3>Log In</h3></Link></li>
              <li><Link to="/signup"><h3>Sign Up</h3></Link></li>
            </ul>
          </Route>

          <Route exact path="/login">
            <LoginForm {...this.props} setUser={this.props.setUser}/>
          </Route>

          <Route exact path="/signup">
            <SignupForm setUser={this.setUser}/>
          </Route>
          {/* create on backend */}
          <Route path="/users">
            <MapContainer key={this.props.user.user.data.id} user={this.props.user}/>
          </Route>
          {/* needs to get a user and put that user in the address bar, then load their pins on the map */}
          <Route path="/users">
            <PinContainer user={this.props.user}/>
          </Route>
          {/* needs to load the users pins and display them on map */}
        </>
        </Router>
      </div>
    );  
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    pins: state.pins
  }
}

export default connect(mapStateToProps, {setUser, addPin})(App);
