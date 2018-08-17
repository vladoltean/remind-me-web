import React from 'react';
import {FormInputGroup, MyBtn, MyRow} from '../custom-components/Components'
import styled from 'styled-components'
import {SocialSignIn} from "./SignInSocial";


export const SignInOuterContainer = (props) => {

    const StyledSignInOuterContainer = styled.div`
        min-height: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        background-color: #22223B;
    `;

    return (
        <StyledSignInOuterContainer>
            <div className="container">
                {props.children}
            </div>
        </StyledSignInOuterContainer>
    )
};

export const SignInContainer = () => {

    const StyledSignInContainer = styled.div`
        min-height: 100%;
        min-width: 100%;
        display: flex;
        justify-content: center;
        
        background-color: #F4F4F4;
        border-radius: 3px;
        box-shadow: 10px 10px 5px #7B287D;
        padding: 5px;
        
        /*web*/
        @media only screen and (min-width: 769px) {
           min-width: 500px;
           max-width: 500px;
           margin-left: auto;
           margin-right: auto;
        }
        
        
        //TODO: move this props to their own components
        .row {
            width: 100%;
            margin: 0;
        }

        .row .row{
            width: 100%;
            margin:0;
        }

        .row div {
            text-align: center;
        }
        
    `;

    return (
        <StyledSignInContainer>
            <MyRow>
                <SignInTitle/>
                <SignIn/>
            </MyRow>
        </StyledSignInContainer>
    )
};

export const SignInTitle = () => {

    const StyledSignInTitle = styled.div`
        border-bottom: 1px solid #F4F4F4;
        font-weight: bold;
        color: #7B287D;
        font-size: 30px;
    `;

    return (
        <MyRow>
            <StyledSignInTitle>
                Sign in
            </StyledSignInTitle>
        </MyRow>
    )
};

export const SignIn = () => {

    const StyledSignInContent = styled.div`
        margin: 20px 10px;
    `;

    return (
        <MyRow>
            <StyledSignInContent>
                <SignInForm/>
                <SocialSignIn/>
            </StyledSignInContent>
        </MyRow>
    )
};

export const SignInForm = () => {

    const StyledSignInForm = styled.div`
        margin: 10px auto;
        max-width: 300px;
    `;

    const StyledMyBtn = styled(MyBtn)`
      width: 100%;
    `;

    return (
        <MyRow>
            <StyledSignInForm>
                <form>
                    <FormInputGroup placeholder="Enter Username"/>
                    <FormInputGroup placeholder="Enter Password"/>
                    <StyledMyBtn className="btn-default" text="Sign In"/>
                </form>
            </StyledSignInForm>
        </MyRow>
    )
};
