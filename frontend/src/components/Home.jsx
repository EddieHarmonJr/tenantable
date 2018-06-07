import React, { Component } from 'react';
import { Route } from "react-router-dom";
import '../css/Home.css';
import axios from 'axios';
import Ratings from './Ratings';


class Home extends Component {
    constructor(){
        super();
    }



    render() {
        return(
            <div>
                <h1>Welcome to the Tenantable Home Page!</h1>

                <Ratings />
            </div>
        )
    }
}

export default Home;