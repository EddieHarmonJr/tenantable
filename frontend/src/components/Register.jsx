import React, { Component } from 'react';
import axios from "axios";
import '../css/Register.css';
import RegistrationBackground from './RegistrationBackground';


class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            email: "",
            istenant: "",
            password: "",
            passwordConfirmation: "",
            validInput: false,
            message: "",
        }
        // this.handleRegisterButton = this.handleRegisterButton.bind(this)
    }


    handleUsernameInputChange = (e) => {
        const username = e.target.value;
        const validInput = username.length >= 3 && username.length <= 14;
    
            this.setState ({
                username,
                validInput   
            })
        };

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

    // handleRegisterButton(e){
    //     e.preventDefault();
    // }

    registerNewUserForm = e => {
        e.preventDefault();
        const {
          username,
          email,
          password,
          passwordConfirmation,
          istenant
        } = this.state;
    
        if (!istenant) {
          this.setState({
            message: "* Are You A Tenant Or Landlord?"
          });
          return;
        } else if (password !== passwordConfirmation) {
          this.setState({
            message: "* Passwords Do Not Match. Please Try Again."
          });
          return;
        } else if (password === passwordConfirmation) {
          this.setState({
            message: "Passwords match!"
          });
        }
        axios
          .post("/users/create", {
            username: username,
            email: email,
            password: password,
            istenant: eval(istenant)
          })
          .then(res => {
            this.setState({
              message: "Account Created",
            });
            axios
              .post("/users/login", {
                username: username,
                password: password
              })
              .then(res => {
                // redirect to user's profile
                this.props.frontendRegister(this.state);
                this.setState({
                  newUserSignedIn: true
                });
                this.props.appLogIn();
              })
              .catch(err => {
                console.log(err);
                this.setState({
                  message: "Account Exists Already"
                });
              });
          });
      };

    render() {
        const message = this.state.validInput ?
        <span className='valid'> OK </span>
      : <span className='invalid'> Username must be between 3 - 14 characters </span>
        return(
        <div className="backgroundImg" >
            <div className="apartmentPhoto-overlay">
                {/* <RegistrationBackground /> */}
                {/* <h1>Welcome to the Tenantable Register Page!</h1> */}
                <div id="registerForm">                    
                <form  onSubmit={this.registerNewUserForm}>
                        <fieldset>
                            <legend>Let Your Voice Be Heard!</legend>
                                Username:<br/>
                            <input type="text" name="username" placeholder="Enter A Screen Name." onChange={this.handleUsernameInputChange}/><br/>
                            <span className="usernameMessage">{message}</span>
                            <br/>
                            <br/>
                                Email:<br/>
                            <input type="email" name="email" placeholder="What's Your Email?" onChange={this.handleEmailInputChange}/><br/>
                            <br/>
                                Password:<br/>
                            <input type="password" name="password" placeholder="Create A Good Password!" onChange={this.handlePasswordInputChange}/><br/><br/>
                            <br/>
                                Re-Enter Password:<br/>
                            <input type="password" name="password2" placeholder="Enter Password Again!" onChange={this.handlePasswordInputChange}/><br/><br/>
                            <input id="create-account-button" type="submit" value="Create Account"/>
                        </fieldset>
                    </form>
                </div>
                

                {/* <h1>Hello {this.state.username}!</h1>
                <h1>Here's Your Email:{this.state.email}</h1>
                <h1>Here is your password: {this.state.password}</h1> */}
                {/* Testing to ensure I am getting the data that I expected. */}
            </div>
        </div>
        )
    }
}

export default Register;

