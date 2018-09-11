import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAuthenticated() === true
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
);

/**
 * For now, the authentication consists only in the jwt cookie presence.
 * @returns {boolean}
 */
export const isAuthenticated = () => {
    return isJwtCookieThere();
};

export const isJwtCookieThere = () => {
    let cookie = getCookieByName("jwt");
    if (cookie !== undefined) {
        return true;
    }
    return false;
};


export const signout = (callback) => {
    deleteCookieByName("jwt");
    fetch('http://localhost:8080/logout',
        {
            method: 'POST',
            credentials: "include",
            mode: "no-cors"
        })
        .then(response => console.log(response))
        .catch(error => console.error('Error Logged by vlad:', error));
    setTimeout(callback, 500);
};


export const getCookieByName = (name) => {
    let cookies = document.cookie;
    cookies = cookies.split(";");

    for (var cookie of cookies) {
        const splitedCookie = cookie.split("=");
        const key = splitedCookie[0];
        const value = splitedCookie[1];
        if (key === name) {
            return {
                key: key,
                value: value
            };
        }
    }
};

export const deleteCookieByName = (name) => {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};