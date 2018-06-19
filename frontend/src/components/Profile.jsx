import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
// import { Divider } from 'semantic-ui-react';
import { Grid, Rail, Segment, Divider, Image, Reveal } from 'semantic-ui-react'




class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            userRating: "",
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

    getUserRating = () => {
        const { userRating } = this.state;
        console.log("UserRating function is being fired.")
        axios.get(`/users/getuserrating/${userRating}`)
            .then(res => {
                console.log(`tell me what's really going on`, res.data.userRating)
                this.setState({
                    userRating: res.data.userRating
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('Everything has been loaded to the DOM')
        this.getSingleUser()
        this.getUserRating()
        // this.getSingleTenant()
    }

    render() {
        const { user } = this.state;
        const { username } = this.props;
        const { userRating } = this.state;
        console.log(`tendatas`, this.state)
        return (
            <div>

                <div className="container">
                    <div>
                        <h1>User Profile:</h1>
                    </div>

                    <div className="pictureFrame">
                        <img src="./images/frame1.jpg" alt="Picture Frame" height="400" width="400" />
                    </div>
                    <div>
                        <h1 className="username">"{user.username}"</h1>
                        <img src={user.imgurl} alt="profile pic" />
                        {/* <h2 className="bio">BIO</h2>  */}
                        {/* <p>{user.bio}</p>  */}
                        {/* <h2 className="email">EMAIL</h2>    */}
                        {/* <h3>{user.email}</h3>    */}

                        {/* <h1>{user.id}</h1>   */}
                    </div>
                </div>

                {/* possible photo reveal code below */}
                {/* <div className="container">
                    <div>
                        <h1>User Profile:</h1>
                    </div>

                <div>
                <h1 className="username">"{user.username}"</h1>

                    <Reveal animated='move'>
                        <Reveal.Content visible>
                            <Image src='./images/frame1.jpg' size='large' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={user.imgurl} size='large' />
                        </Reveal.Content>
                    </Reveal>
                </div> */}

                <Divider />

                <Grid columns={3} relaxed>
                    <Grid.Column>
                        <Segment basic><h2 className="bio">BIO</h2><h1>{user.bio}</h1></Segment>
                    </Grid.Column>
                    <Divider vertical>Or</Divider>
                    <Grid.Column>
                        <Rail dividing position='left'>
                            {/* <Segment></Segment> */}
                        </Rail>
                        <Segment basic><h2 className="email">EMAIL</h2><h1>{user.email}</h1></Segment>
                        <Rail dividing position='right'>
                        {/* <Segment></Segment> */}
                    </Rail>
                    </Grid.Column>
                    <Divider vertical>And</Divider>
                    <Grid.Column>
                        <Segment basic><h2 className="review">REVIEW</h2><h1>{user.id}</h1></Segment>
                    </Grid.Column>
                </Grid>

                {/* <Divider /> */}

            </div>
        )
    }
}

export default Profile;