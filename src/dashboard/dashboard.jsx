import React from "react";
import {signout} from "../sign-in/Authentication";
import {SignOutBtn} from "../sign-in/SignOut";

export class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <h4>THIS IS THE DASHBOARD</h4>
                <SignOutBtn/>
            </div>
        );
    }

}