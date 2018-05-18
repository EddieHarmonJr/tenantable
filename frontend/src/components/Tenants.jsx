import React, { Component } from 'react';
import axios from 'axios';


class Tenants extends Component {
    constructor(props){
        super(props);

        this.state = {
            tenants: [],
        }
    }

    getAllTenants = () => {
        axios.get('/tenants')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('Everything has been loaded to the DOM')
    }

    render(){
        const tenants = this.state.tenants
        this.getAllTenants()
        return(
            <div>
                {tenants}
            </div>
        )
    }
}

export default Tenants;