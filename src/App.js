import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import './App.css';
import {SignInCard} from "./sign-in/SignIn";
import {Route, Switch} from "react-router-dom";
import {Dashboard} from "./dashboard/dashboard";
import {NotFound} from "./not-found/NotFound";

const App = () => (

    <Switch>
        <Route exact path='/' component={SignInCard}/>
        <Route path='/home' component={SignInCard}/>
        <Route path='/signin' component={SignInCard}/>
        <Route path='/login' component={SignInCard}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route component={NotFound}/>
    </Switch>
);

export default App;
