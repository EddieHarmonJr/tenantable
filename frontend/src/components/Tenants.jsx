import React, { Component } from 'react';
import axios from 'axios';


class Tenants extends Component {
    constructor(props){
        super(props);

        this.state = {
            tenants: []
        }
    }

    getAllTenants = () => {
        axios.get('/tenants/Jack')
            .then(res => {
                console.log(`tell meee what really going on`,res.data.data)
                this.setState({
                    tenants: res.data.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('Everything has been loaded to the DOM')
        this.getAllTenants()
    }

    render(){
        const { tenants } = this.state;
        console.log(`tendatas`,tenants)
        return(
            <div>
                {tenants.username}
                {tenants.bio}
            </div>
        )
    }
}

export default Tenants;