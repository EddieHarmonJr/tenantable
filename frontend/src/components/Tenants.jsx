import React, { Component } from 'react';
import axios from 'axios';


class Tenants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tenants: []
        }
    }

    getAllTenants = () => {
        axios.get('/tenants')
            .then(res => {
                console.log(`tell meee what really going on`, res.data.data)
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

    render() {
        const { tenants } = this.state;
        console.log(`tendatas`, tenants)
        return (
            <div className="container">
            {tenants.map(function(tenant){
                return (
                <div className="tentantRow">
                    <div className="tenantPhoto">

                    </div>
                    <div className="username">{tenant.username}</div>
                    <div className="email">{tenant.email}</div>
                    <div className="apartmentName">{tenant.apartment_id}</div>
                    <div className="rating">{tenant.ratings}</div>

                </div>
                )
            })}
                
            </div>
                )
            }
        }
        
export default Tenants;