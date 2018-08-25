import React from 'react';
import {MyBtn, MyRow} from "../custom-components/Components";
import styled from 'styled-components'
import {auth, authenticate, isAuthenticated} from "./Authentication";
import {Redirect} from "react-router-dom";

export class SocialSignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = { signedIn: false };
    }

    handleFbClick = (e) => {

        authenticate(() => {
            // trigger rerendering of the page
            this.forceUpdate();
        });

        // alert('Facebook button pressed!');
    };

    handleGoogleClick = (e) => {
        alert('Google button pressed!');
    };


    render() {
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
             border-top: 1px solid #7B287D;
             margin-top: 50px;
             padding-top: 10px;
           `;
        const Title = styled.div`
            color: #5e6772;
            font-size: 15px;
        `;


        //TODO: move this to a custom ProtectedRoute as in https://tylermcginnis.com/react-router-protected-routes-authentication/
        if(isAuthenticated() === true){
            return (
                <Redirect to='/dashboard' />
            )
        }

        return (
            <StyledSocialSignIn className="row">
                <Title className="row">Social Sign In</Title>
                <MyRow>
                    <FacebookBtn text="Facebook"
                                 onClick={this.handleFbClick}/>

                    <GoogleBtn text="Google"
                               onClick={this.handleGoogleClick}/>

                </MyRow>
            </StyledSocialSignIn>
        )
    };
}