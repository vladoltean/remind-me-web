import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import './App.css';
import {SignInContainer, SignInOuterContainer} from "./sign-in/SignIn";

const App = () => (
    <SignInOuterContainer>
        <div className="row">
            <SignInContainer/>
        </div>
    </SignInOuterContainer>
);

export default App;
