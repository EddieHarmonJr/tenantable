import React, { Component } from 'react';
import '../css/Register.css';
import RegistrationBackground from './RegistrationBackground';


class Register extends Component {
    constructor(){
        super();
    }

    render() {
        return(
        <div className="backgroundImg" >
            <div className="apartmentPhoto-overlay">
                {/* <RegistrationBackground /> */}
                {/* <h1>Welcome to the Tenantable Register Page!</h1> */}
                <div id="registerForm">                    <form action="/action_page.php">
                        <fieldset>
                            <legend>Let Your Voice Be Heard!</legend>
                                Username:<br/>
                            <input type="text" name="username" value="Enter A Screen Name."/><br/>
                            <br/>
                                Email:<br/>
                            <input type="text" name="lastname" value="What's Your Email?"/><br/>
                            <br/>
                                Password:<br/>
                            <input type="text" name="lastname" value="Create A Good Password!"/><br/><br/>
                            <input id="create-account-button" type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
                
            </div>
        </div>
        )
    }
}

export default Register;

