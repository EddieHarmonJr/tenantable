import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>Welcome to the Tenantable User Profile Page!</h1>

                <img src="./images/frame1.jpg" alt="Picture Frame" height="400" width="400"/>

            </div>
        )
    }
}

export default UserProfile;