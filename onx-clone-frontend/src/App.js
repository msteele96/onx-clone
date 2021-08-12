import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import PinContainer from './containers/PinContainer'
import MapContainer from './containers/MapContainer'
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm'
import { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from './actions/userActions';
import { addPin } from './actions/pinsActions';
import { loadUsersPins } from './actions/pinsActions';

class App extends Component {

  render() {
    let key = this.props.user.user.data.id
    // if (this.props.user.loading === true || this.props.pins.loading === true) {
    
    return (
      <div className="App">
        <h1> OnX Clone</h1>
        <Switch>
          <>
          <Route exact path="/">
            <ul style={{listStyle:'none'}}>
              <li><Link to="/login"><h3>Log In</h3></Link></li>
              <li><Link to="/signup"><h3>Sign Up</h3></Link></li>
            </ul>
          </Route>

          <Route exact path="/login">
            <LoginForm user={this.props.user} setUser={this.props.setUser}/>
          </Route>

          <Route exact path="/signup">
            <SignupForm user={this.props.user} setUser={this.props.setUser}/>
          </Route>

          <Route path="/dashboard">
            <MapContainer key={key} user={this.props.user.user} pins={this.props.pins.pins}/>
          </Route>

          <Route path="/dashboard">
            <PinContainer key={key} user={this.props.user.user} pins={this.props.pins.pins} addPin={this.props.addPin} loadUsersPins={this.props.loadUsersPins}/>
          </Route>
          
          <Route exact path="/failure" render={() => <><h2>Problem logging you in, try again.</h2> <Link to="/login"><h3>Log In</h3></Link> </>}/>
        </>
        </Switch>
      </div>
    ); 

    // } 
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    pins: state.pins
  }
}

export default connect(mapStateToProps, {setUser, addPin, loadUsersPins})(App);
