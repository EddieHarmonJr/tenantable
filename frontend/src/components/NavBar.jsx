import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import { Redirect } from "react-router";
import '../css/NavBar.css';



class NavBar extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <nav>
                    <Link to="/" className="brandName">Tenantable</Link>
                    {" "}
                    <Link to="/register">Register</Link>
                    {" "}
                    <Link to="/login">Login</Link>
                    {" "}
                    <Link to="/aboutus">About Us</Link>
                    {" "}
                    <Link to="/faq">FAQ</Link>
                </nav>
            </div>
        )
    }

   
}

export default NavBar;