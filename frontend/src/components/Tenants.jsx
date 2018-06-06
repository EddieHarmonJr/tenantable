import React, { Component } from 'react';
import axios from 'axios';


class Tenants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }


    getAllUsers = () => {
        axios.get('/users/getallusers')
            .then(res => {
                console.log(`tell me what's really going on`, res.data.data)
                this.setState({
                    users: res.data.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('Everything has been loaded to the DOM')
        this.getAllUsers()
        // this.getSingleTenant()
    }

    render() {
        const { users } = this.state;
        console.log(`tendatas`, users)
        return (
            <div>
                <div className="container">
                    <div>
                        <h1>Here's a list of tenants...</h1>
                    </div>

                    {/* <div className="pictureFrame">
                        <img src="./images/frame1.jpg" alt="Picture Frame" height="400" width="400" />
                    </div> */}
                    <div>
                        {users.map(user => {
                            return (
                                <div>
                                    <div>
                                        <img src={user.imgurl} alt="profile pic"/>
                                    </div>
                                    <div>
                                        <h1 className="username">"{user.username}"</h1> 
                                    </div>
                                    <div>
                                        <h2 className="email">EMAIL</h2>   
                                        <h3>{user.email}</h3>
                                    </div> 
                                    <div>
                                        <h2 className="bio">BIO</h2> 
                                        <p>{user.bio}</p> 
                                    </div>
                                </div>
                            )
                        })}      
                    </div>
                </div>
            </div>
                )
            }
        }
        
export default Tenants;