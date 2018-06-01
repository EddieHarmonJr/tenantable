import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tenants: []
        }
    }

    getSingleTenant = () => {
        axios.get('/tenants/Jack')
            .then(res => {
                console.log(`tell me what's really going on`, res.data.data)
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
        // this.getSingleTenant()
    }

    render() {
        const { tenant } = this.state;
        console.log(`tendatas`, tenant)
        return (
            <div>
                <div className="container">
                    <div>
                        <h1>Welcome to the Tenantable User Profile Page!</h1>
                    </div>

                    <div className="pictureFrame">
                        <img src="./images/frame1.jpg" alt="Picture Frame" height="400" width="400" />
                    </div>
                    <div>
                        
                        {tenant.username}
                        
                        {tenant.bio}
                        {tenant.reviews}
                        {tenant.ratings}
                        {tenant.email}
                    </div>

                </div>
            </div>
                )
            }
        }
        
export default Profile;