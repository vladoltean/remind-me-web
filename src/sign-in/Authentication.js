import React from'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated() === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)


const authentication = {
    isAuthenticated: false,
};


export const isAuthenticated = () => {
    const auth = getAuth();
    if (auth && auth.isAuthenticated === true) {
        return true;
    }
    return false;
}


export const authenticate = (callback) => {
    const auth = getAuth();
    if (!auth) {
        console.error("Authentication not found for signing in!");
        return;
    }
    setTimeout(doAuthenticate(auth, callback), 500);
}

const doAuthenticate = (auth, callback) => {
    auth.isAuthenticated = true;
    putAuth(auth);
    callback();
};

export const signout = (callback) => {
    const auth = getAuth();
    if (!auth) {
        console.error("Authentication not found for signing out!");
        return;
    }
    doSignOut(auth, callback);
    setTimeout(callback, 500);
}

const doSignOut = (auth, callback) => {
    auth.isAuthenticated = false;
    putAuth(auth);
    callback();
}


const getAuth = () => {
    const authString = localStorage.getItem("auth")
    let auth;
    if (authString !== undefined && authString !== "undefined") {
        auth = JSON.parse(authString);
    }
    if (!auth || auth === undefined) {
        auth = authentication;
        putAuth(auth);
    }
    return auth;
}

export const putAuth = (auth) => {
    localStorage.setItem("auth", JSON.stringify(auth));
}