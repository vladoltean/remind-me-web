import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import './App.css';

const MyBtn = (props) => {

    const {className, text, otherProps} = {...props};
    const classNames = ['btn', 'my-button', className].join(' ');

    if (!text) {
        console.error("Every button must contain a text property!");
    }

    return <button className={classNames} {...otherProps}>{text}</button>

};

const FormInputGroup = (props) => {
    const {placeholder, otherProps} = {...props};
    return (
        <div className="form-group">
            <input type="text" className="form-control" placeholder={placeholder} {...otherProps}/>
        </div>)
};

const SocialSignIn = () => (
    <div className="row social-sign-in">
        <div className="row title">Social Sign In</div>
        <div className="row">
            <MyBtn className="fb-sign-in" text="Facebook"/>
            <MyBtn className="google-sign-in" text="Google"/>
        </div>
    </div>
);

const SignInForm = () => (
    <div className="row">
        <div className="sign-in">
            <form>
                <FormInputGroup placeholder="Enter Username"/>
                <FormInputGroup placeholder="Enter Password"/>

                <MyBtn className="btn-default" text="Sign In"/>
            </form>
        </div>
    </div>
);

const SignIn = () => (
    <div className="row">
        <div className="sign-in-content">
            <SignInForm/>
            <SocialSignIn/>
        </div>
    </div>
);

const SignInTitle = () => (
    <div className="row">
        <div className="sign-in-title">
            Sign in
        </div>
    </div>
);

const SignInContainer = (props) => (
    <div className="vertical-align page">
        <div className="container">
            {props.children}
        </div>
    </div>
);

const App = () => (
    <SignInContainer>
        <div className="row">
            <div className="horizontal-align sign-on">
                <div className="row">
                    <SignInTitle/>
                    <SignIn/>
                </div>
            </div>
        </div>
    </SignInContainer>
);

export default App;
