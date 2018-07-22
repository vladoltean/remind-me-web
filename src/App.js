import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import './App.css';
import {SignIn, SignInOuterContainer, SignInTitle} from "./sign-in/SignIn";

const SignIn = () => (
    <div className="horizontal-align sign-on">
        <div className="row">
            <SignInTitle/>
            <SignIn/>
        </div>
    </div>
);


const App = () => (
    <SignInOuterContainer>
        <div className="row">
            <SignIn/>
        </div>
    </SignInOuterContainer>
);

export default App;
