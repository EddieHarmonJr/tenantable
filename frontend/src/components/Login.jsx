import React, { Component } from 'react';
import '../css/Login.css';


class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            validInput: false,
            password: "",
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

    render() {
        const message = this.state.validInput ?
        <span className='valid'> OK </span>
      : <span className='invalid'> Username must be between 3 - 14 characters </span>
        return(
            <div className="backgroundImage">
            

                <div className="photo-overlay">
                    <div id="loginForm">
                        <form>
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