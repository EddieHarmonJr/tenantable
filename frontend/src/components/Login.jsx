import React, { Component } from 'react';
import '../css/Login.css';


class Login extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className="backgroundImage">

                <div className="photo-overlay">
                    <div id="loginForm">
                        <form action="/action_page.php">
                            <fieldset>
                                <legend>Welcome Back! Login Here:</legend>
                                    Username:<br/>
                                <input type="text" name="username" value="Username"/><br/>
                                <br/>
                                    Password:<br/>
                                <input type="password" name="password" value="Password"/><br/><br/>
                                <input type="submit" value="Login" />
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;