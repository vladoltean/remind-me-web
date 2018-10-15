import {signout} from "./Authentication";
import React from "react";
import {Redirect} from "react-router-dom";
import {MyBtn} from "../custom-components/Components";

export class SignOutBtn extends React.Component {

    constructor() {
        super();
        this.state = {
            redirectAfterSignOut: false
        }
    }

    handleSignOut = () => {
        this.setState({
            redirectAfterSignOut: true
        });
        signout(() => {
            console.log("You have been signed out!");
        })
    };

    render() {

        if (this.state.redirectAfterSignOut) {
            return (
                <Redirect to={"/login"}/>
            )
        }

        return (
            <MyBtn text="Sign Out" onClick={this.handleSignOut}/>
        )
    }

}