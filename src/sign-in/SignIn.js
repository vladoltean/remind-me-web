import React from 'react';
import {FormInputGroup, MyBtn} from '../custom-components/Components'
import styled from 'styled-components'


export const SocialSignIn = () => {

    const FacebookBtn = styled(MyBtn)`
        float:left;
        background: -webkit-linear-gradient(top, #4267b2, #29487d);
        
        &:hover {
          background: -webkit-linear-gradient(top, #29487d, #4267b2); /*facebook navbar color, border bottom color*/
          color: white;
        }
    `;


    const GoogleBtn = styled(MyBtn)`
      float:right;
      background: -webkit-linear-gradient(top, #d34836, #9c4432); /*google plus red color, google plus dark grey color*/
      &:hover {
          background: linear-gradient(top, #9c4432, #d34836); /*google plus red color, google plus dark grey color*/
          color:white;
        }
    `;

    return (
        <div className="row social-sign-in">
            <div className="row title">Social Sign In</div>
            <div className="row">
                <FacebookBtn text="Facebook"/>
                <GoogleBtn text="Google"/>
            </div>
        </div>
    )
};

export const SignInForm = () => {
    return (
        <div className="row">
            <div className="sign-in">
                <form>
                    <FormInputGroup placeholder="Enter Username"/>
                    <FormInputGroup placeholder="Enter Password"/>

                    <MyBtn className="btn-default" text="Sign In"/>
                </form>
            </div>
        </div>
    )
};

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