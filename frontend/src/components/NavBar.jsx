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
            <div id="navBarSection">

                <div id="tenantableLogo">
                    <nav>
                        <Link to="/" className="brandName"><a href="/">
                        <a>
                        <img classname="aptBuilding" src="favicon.ico" alt="building"/>
                    </a>
                        <img className="tenantableLogo" src="/images/TenantableLogo.png" alt="Tenantable Logo"/>
                    </a></Link>
                    </nav>
                </div>

                <div>
                    <nav id="navBarLinks">
                        {/* {" "} */}
                        <Link to="/register">Register</Link>
                        {" "}
                        <Link to="/login">Login</Link>
                        {" "}
                        <Link to="/aboutus">About Us</Link>
                        {" "}
                        <Link to="/faq">FAQ</Link>
                        {" "}
                        <Link to="/profile">Profile</Link>

                    </nav>
                
                </div> 

            </div>
        )
    }

   
}

export default NavBar;