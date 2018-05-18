import React, { Component } from 'react';
import '../css/Home.css';
import Tenants from './Tenants';


class Home extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>Welcome to the Tenantable Home Page!</h1>

                <Tenants />
               
            </div>
        )
    }
}

export default Home;