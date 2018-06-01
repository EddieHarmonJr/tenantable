import React, { Component } from 'react';
import '../css/Register.css';
import RegistrationBackground from './RegistrationBackground';


class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }


    handleUsernameInputChange = (e) => {
        this.setState ({
            username: e.target.value
        })
    }

    handleEmailInputChange = (e) => {
        this.setState ({
            email: e.target.value
        })
    }

    handlePasswordInputChange = (e) => {
        this.setState ({
            password: e.target.value
        })
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
                            <input type="text" name="username" placeholder="Enter A Screen Name." onChange={this.handleUsernameInputChange}/><br/>
                            <br/>
                                Email:<br/>
                            <input type="email" name="lastname" placeholder="What's Your Email?" onChange={this.handleEmailInputChange}/><br/>
                            <br/>
                                Password:<br/>
                            <input type="password" name="lastname" placeholder="Create A Good Password!" onChange={this.handlePasswordInputChange}/><br/><br/>
                            <input id="create-account-button" type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
                

                <h1>Hello {this.state.username}!</h1>
                <h1>Here's Your Email:{this.state.email}</h1>
                <h1>Here is your password: {this.state.password}</h1>
            </div>
        </div>
        )
    }
}

export default Register;

