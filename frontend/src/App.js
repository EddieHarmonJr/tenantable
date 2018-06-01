import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FAQ from './components/FAQ';
import Tenants from './components/Tenants';



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
        <Route path="/faq" component={FAQ} />
        <Route path="/profile" component={Profile} />
        <Route path="/tenants" component={Tenants} />

      </Switch>
      </div>
    );
  }
}

export default App;
