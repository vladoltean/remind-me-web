import React from "react";
import {MyBtn} from "../custom-components/Components";
import {isAuthenticated, signout} from "../sign-in/Authentication";
import {Redirect} from "react-router-dom";

export class Dashboard extends React.Component {

    handleSignOut = () => {
        signout(() => {
            this.forceUpdate();
        })
    };


    render() {

        //TODO: move this to a custom ProtectedRoute as in https://tylermcginnis.com/react-router-protected-routes-authentication/
        if (!isAuthenticated()) {
            return (
                <Redirect to='/'/>
            )
        }

        return (
            <div>
                <h4>THIS IS THE DASHBOARD</h4>
                <MyBtn text="Sign Out" onClick={this.handleSignOut}></MyBtn>
            </div>
        );
    }

}