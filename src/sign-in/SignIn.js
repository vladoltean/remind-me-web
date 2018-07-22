import React from 'react';
import { MyBtn, FormInputGroup } from '../custom-components/Components'


export const SocialSignIn = () => (
    <div className="row social-sign-in">
        <div className="row title">Social Sign In</div>
        <div className="row">
            <MyBtn className="fb-sign-in" text="Facebook"/>
            <MyBtn className="google-sign-in" text="Google"/>
        </div>
    </div>
);

export const SignInForm = () => (
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

export const SignIn = () => (
    <div className="row">
        <div className="sign-in-content">
            <SignInForm/>
            <SocialSignIn/>
        </div>
    </div>
);

export const SignInTitle = () => (
    <div className="row">
        <div className="sign-in-title">
            Sign in
        </div>
    </div>
);

export const SignInOuterContainer = (props) => (
    <div className="vertical-align page">
        <div className="container">
            {props.children}
        </div>
    </div>
);