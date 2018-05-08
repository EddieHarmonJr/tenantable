import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import { Redirect } from "react-router";


class NavBar extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <nav>
                    <Link to="/">Tenantable</Link>
                    {" "}
                    <Link to="/register">Register</Link>
                    {" "}
                    <Link to="/login">Login</Link>
                    {" "}
                    <Link to="/aboutus">About Us</Link>
                </nav>
            </div>
        )
    }

   
}

export default NavBar;