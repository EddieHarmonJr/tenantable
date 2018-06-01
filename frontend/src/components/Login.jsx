import React, { Component } from 'react';
import '../css/Login.css';


class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
        }
    }

    handleUsernameInputChange = (e) => {
        this.setState ({
            username: e.target.value
        })
    }

    handlePasswordInputChange = (e) => {
        this.setState ({
            password: e.target.value
        })
    }

    render() {
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
                                    Password:<br/>
                                <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordInputChange}/><br/><br/>
                                <input id="login-button" type="submit" value="Login" />
                            </fieldset>
                            
                        </form>
                    </div>

                    {/* <h1>Hello {this.state.username}!</h1>
                    <h1>Here is your password: {this.state.password}</h1> */}
                </div>

            </div>
        )
    }
}

export default Login;