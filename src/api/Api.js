export const fetch_api = (path, init) => {

    const baseUrl = getBaseUrl();

    if(path.indexOf('http') < 0){
        path = baseUrl + path;
    }

    return fetch(path, init);
};

export const getFacebookLoginUrl = () => {
    return getBaseUrl() + "/login/facebook";
};

export const getGoogleLoginUrl = () => {
    return getBaseUrl() + "/login/google";
};

export const getBaseUrl = () => {

    //TODO: COnfigure environment (https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5)
    const baseUrlFromEnvironmentVar = process.env.BASE_URL;
    console.log(baseUrlFromEnvironmentVar);
    console.log(process.env);
    return baseUrlFromEnvironmentVar || 'http://localhost:8080'

};