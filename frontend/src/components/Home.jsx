import React, { Component } from 'react';
import { Route } from "react-router-dom";
import '../css/Home.css';
import axios from 'axios';


class Home extends Component {
    constructor(){
        super();
    }



    render() {
        return(
            <div>
                <h1>Welcome to the Tenantable Home Page!</h1>


            </div>
        )
    }
}

export default Home;