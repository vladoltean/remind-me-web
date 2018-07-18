import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="vertical-align page">
                <div className="container">
                    <div className="row">
                        <div name="sign-on-container" className="horizontal-align sign-on">
                            <div className="row">
                                <div className="row">
                                    <div className="sign-in-title">
                                        Sign in
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="sign-in-content">

                                        <div className="row">
                                            <div className="sign-in">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Enter Username" name="uname"
                                                               required/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="password" className="form-control" placeholder="Enter Password" name="psw"
                                                               required/>
                                                    </div>

                                                    <button className="btn btn-default my-button">Login</button>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="row social-sign-in">
                                            <div className="row title">Social Sign In</div>
                                            <div className="row">
                                                <button className="btn my-button fb-sign-in">Facebook</button>
                                                <button className="btn my-button google-sign-in">Google</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
