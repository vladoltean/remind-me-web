import React from "react";
import {getCurrentUser} from "../sign-in/Authentication";
import {SignOutBtn} from "../sign-in/SignOut";

export class Dashboard extends React.Component {

    render() {
        const currentUser = getCurrentUser();

        return (
            <div>
                <h4>THIS IS THE DASHBOARD</h4>
                <h3> Welcome, {currentUser.name} !</h3>
                <SignOutBtn/>
            </div>
        );
    }

}