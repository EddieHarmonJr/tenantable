import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        {/* <Home /> */}
        {/* <AboutUs /> */}
        {/* <UserProfile /> */}
        {/* <Register /> */}
        {/* <Login /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
      </div>
    );
  }
}

export default App;
