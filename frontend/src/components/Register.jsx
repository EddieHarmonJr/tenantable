import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>Welcome to the Tenantable Register Page!</h1>
                <div>
                    <form action="/action_page.php">
                        <fieldset>
                            <legend>Personal information:</legend>
                                Username:<br/>
                            <input type="text" name="username" value="Enter A Screen Name."/><br/>
                            <br/>
                                Email:<br/>
                            <input type="text" name="lastname" value="What's Your Email?"/><br/>
                            <br/>
                                Password:<br/>
                            <input type="text" name="lastname" value="Create A Good Password!"/><br/><br/>
                            <input type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Register;