import React from "react";
import {getCurrentUser} from "../sign-in/Authentication";
import {SignOutBtn} from "../sign-in/SignOut";
import {fetch_api} from "../api/Api";

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        }

    };

    componentDidMount() {
        fetch_api("/user", {
            method: 'GET',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({users: res, isLoaded: true});
            });

    }

    render() {
        const currentUser = getCurrentUser();
        const {error, isLoaded, users} = this.state;

        return (
            <div>
                <h4>THIS IS THE DASHBOARD</h4>
                <h3> Welcome, {currentUser.name} !</h3>
                <p> {JSON.stringify(users, null, 20)} </p>
                <SignOutBtn/>
            </div>
        );
    }

}