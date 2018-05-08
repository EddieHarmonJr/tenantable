import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>Welcome to the Tenantable Login Page!</h1>

                <div>
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
        )
    }
}

export default Login;