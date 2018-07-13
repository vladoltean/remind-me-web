import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="vertical-align">
                <div className="container">
                    <div className="row">
                        {/*<div name="sign-on-container" className="col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5 col-lg-2 col-lg-offset-5">*/}
                        <div name="sign-on-container" className="horizontal-align sign-on">
                            <a className="btn-primary">Facebook Login</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
