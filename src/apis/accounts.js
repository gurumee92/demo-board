import axios from 'axios';
import querystring from 'querystring';
const oauthApiURL = process.env.REACT_APP_OAUTH_API;

export const createAccount = async (username, password) => {
    try {
        const response = await axios.post(`${oauthApiURL}/accounts`, {
            username,
            password,
        });
        console.log(response);
        return response;
    } catch(e) {
        console.error(e);
    }   
}

export const getAccessToken = async (username, password) => {
    const requestData = querystring.stringify({
        username,
        password,
        grant_type: "password",
    });
    try {
        const response = await axios.post(`${oauthApiURL}/oauth/token`, requestData, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: process.env.REACT_APP_OAUTH_USERNAME,
                password: process.env.REACT_APP_OAUTH_PASSWORD,
            },
            data: requestData
        });
        return response;
    } catch(e) {
        console.error(e);
    }   
    
}