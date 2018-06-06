import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        }
    }

    getSingleUser = () => {
        console.log("did i make it")
        const { username } = this.props;
        axios.get(`/users/getsingleuser/${username}`)
            .then(res => {
                console.log(`tell me what's really going on`, res.data.user)
                this.setState({
                    user: res.data.user
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('Everything has been loaded to the DOM')
        this.getSingleUser()
        // this.getSingleTenant()
    }

    render() {
        const { user } = this.state;
        const {username} = this.props;
        console.log(`tendatas`, user)
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
                        <h1 className="username">"{user.username}"</h1> 
                        <img src={user.imgurl} alt="profile pic"/>   
                        <h2 className="bio">BIO</h2> 
                        <p>{user.bio}</p> 
                        <h2 className="email">EMAIL</h2>   
                        <h3>{user.email}</h3>     
                                      
                    </div>
                </div>
            </div>
                )
            }
        }
        
export default Profile;