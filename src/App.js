import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import React from 'react';
import './App.css';
import {SignInCard} from "./sign-in/SignIn";
import {Route, Switch} from "react-router-dom";
import {Dashboard} from "./dashboard/dashboard";
import {NotFound} from "./not-found/NotFound";
import {PrivateRoute} from "./sign-in/Authentication";
import {getFacebookLoginUrl, getGoogleLoginUrl} from "./api/Api";

const App = () => {

    return (
        <Switch>
            <Route exact path='/' component={SignInCard}/>
            <Route path='/home' component={SignInCard}/>
            <Route path='/signin' component={SignInCard}/>
            <Route exact path='/login' component={SignInCard}/>
            <Route exact path='/login/facebook' component={() => window.location = getFacebookLoginUrl()}/>
            <Route exact path='/login/google' component={() => window.location = getGoogleLoginUrl()}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Route component={NotFound}/>
        </Switch>
    );
}

export default App;
