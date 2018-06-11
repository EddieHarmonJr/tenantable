import React, { Component } from 'react';
import axios from "axios";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import '../css/Login.css';
// import comparePasswords from '../../../backend/auth/helpers';
// import createHashPassword from '../../../backend/auth/helpers';
// import loginRequired from '../../../backend/auth/helpers';
//How do I get the hash password to work?


class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
            validInput: false,
            signedIn: false,
            message: "",
            message2: "",

        }
    };

    handleUsernameInputChange = (e) => {
    const username = e.target.value;
    const validInput = username.length >= 3 && username.length <= 14;

        this.setState ({
            username,
            validInput   
        })
    };

    handlePasswordInputChange = (e) => {
        this.setState ({
            password: e.target.value
        })
    };

    submitLoginForm = e => {
        e.preventDefault();
        const { username, password, message, message2 } = this.state;
        axios
          .post("/users/login", {
            username: username,
            password: password
          })
          .then(res => {
            console.log(res);
            // redirect to user's profile
            this.setState({
              signedIn: true
            });
          })
          .catch(err => {
            console.log(err);
            if (username === "" && password === "") {
              this.setState({
                message: "* Fill out Username & Password"
              });
            } else {
              this.setState({
                username: "",
                password: "",
                message: "* Username / Password Incorrect"
              });
            }
          });
      };

    render() {
        const message = this.state.validInput ?
        <span className='valid'> OK </span>
      : <span className='invalid'> Username must be between 3 - 14 characters </span>
        return(
            <div className="backgroundImage">
            

                <div className="photo-overlay">
                    <div id="loginForm">
                        <form onSubmit={this.submitLoginForm}>
                            <fieldset>
                                <legend>Welcome Back! Login Here:</legend>
                                    Username:<br/>
                                <input type="text" name="username" value={this.state.username} placeholder="Username"  onChange={this.handleUsernameInputChange}/><br/>
                                <br/>
                                <span className="usernameMessage">{message}</span>
                                <br/>
                                <br/>
                                    Password:<br/>
                                <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordInputChange}/><br/><br/>
                                <span className="passwordMessage"></span>
                                <input id="login-button" type="submit" value="Login" />
                            </fieldset>
                            
                        </form>
                    </div>
                    {/* <h1>Hello {this.state.username}!</h1>
                    <h1>Here is your password: {this.state.password}</h1> */}
                    {/* Testing to ensure I am getting the data that I expected. */}

                </div>

            </div>
        )
    }
}

export default Login;