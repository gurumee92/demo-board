import axios from 'axios';

const oauthApiURL = process.env.REACT_APP_OAUTH_API;

export const createAccount = async (username, password) => {
    try {
        const response = await axios.post(`${oauthApiURL}/accounts`, {
            username,
            password,
        });
        return response;
    } catch(e) {
        console.error(e);
    }   
}

export const getAccessToken = async (username, password) => {
    try {
        const response = await axios.post(`${oauthApiURL}/oauth/token`, {
            username,
            password,
        }, {
            headers: {
                "Authorization": `Basic ${process.env.REACT_APP_OAUTH_API_BASIC}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response;
    } catch(e) {
        console.error(e);
    }   
    
}