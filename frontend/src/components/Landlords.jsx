import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'



class Landlords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            landlords: []
        }
    }

    getAllLandlords = () => {
        axios.get('/users/getalllandlords')
            .then(res => {
                console.log(`tell me what's really going on`, res.data.data)
                this.setState({
                    landlords: res.data.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    getAllApartments = () => {
        axios.get('/apartments/getallapartments')
            .then(res => {
                console.log(`tell me are the apartments`, res.data.data)
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
        this.getAllLandlords()
        // this.getSingleTenant()
    }

    render() {
        const { landlords } = this.state;
        console.log(`tendatas`, landlords)
        return (
            <div className="mainDiv">
                <div className="container">
                    <div>
                        <h1>Here's a list of landlords...</h1>
                    </div>

                    {/* <div className="pictureFrame">
                        <img src="./images/frame1.jpg" alt="Picture Frame" height="400" width="400" />
                    </div> */}
                    <div className="cardContainer">
                        {landlords.map(landlord => {
                            return (
                                    <Card className="card">
                                    <Image src={landlord.imgurl} href={`/profile/${landlord.username}`}/>
                                        <Card.Content>
                                        <Card.Header>{landlord.username}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Joined in 2018</span>
                                        </Card.Meta>
                                        <Card.Description>{landlord.bio}</Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            22 Friends
                                        </a>
                                        </Card.Content>
                                    </Card>
                                    /* <div>
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
                                    </div> */
                            )
                        })}      
                    </div>
                </div>
            </div>
                )
            }
        }
        
export default Landlords;