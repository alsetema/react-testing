import React, { Component } from 'react';

class Login extends Component {
    
    render() {
        return (
             <div className="container-md" style={{maxWidth: 540}}> 
                <form>
                    <div className="mb-3 mt-5 text-start">
                        <label className="form-label">Username: </label>
                        <input className="form-control" placeholder="input your username" type="username"/>
                    </div>
                    <div className="text-start">
                        <label className="form-label"> Password: </label>
                        <input type="password" className="form-control" placeholder="password" />
                    </div>
                </form>
            </div>
        )


    }
}

export default Login;
