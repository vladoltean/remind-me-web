import React from 'react';
import {FormInputGroup, MyBtn} from '../custom-components/Components'
import styled from 'styled-components'


export const SocialSignIn = () => {

    const SocialBtn = styled(MyBtn)`
        width: 150px;
        height: 40px;
        border: none;
        box-shadow: 2px 2px 5px gray;
        margin: 0 auto;
        color: white;
    `;

    const FacebookBtn = styled(SocialBtn)`
        float:left;
        background: -webkit-linear-gradient(top, #4267b2, #29487d);
        
        &:hover {
          background: -webkit-linear-gradient(top, #29487d, #4267b2); /*facebook navbar color, border bottom color*/
          color: white;
        }
    `;
    const GoogleBtn = styled(SocialBtn)`
      float:right;
      background: -webkit-linear-gradient(top, #d34836, #9c4432); /*google plus red color, google plus dark grey color*/
      &:hover {
          background: -webkit-linear-gradient(top, #9c4432, #d34836); /*google plus red color, google plus dark grey color*/
          color:white;
        }
    `;

    const StyledSocialSignIn = styled.div`
         border-top: 1px solid #b7d0df;
         margin-top: 50px;
         padding-top: 10px;
    `;
    const Title = styled.div`
        color: #5e6772;
        font-size: 15px;
    `;


    return (
        <StyledSocialSignIn className="row">
            <Title className="row">Social Sign In</Title>
            <div className="row">
                <FacebookBtn text="Facebook"/>
                <GoogleBtn text="Google"/>
            </div>
        </StyledSocialSignIn>
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