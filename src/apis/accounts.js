import axios from 'axios';
import querystring from 'querystring';
const oauthApiURL = process.env.REACT_APP_OAUTH_API;

export const createAccount = async (username, password) => {
    try {
        const response = await axios.post(`${oauthApiURL}/api/accounts`, {
            username,
            password,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return {
            data: response.data,
            error: "",
        }
    } catch(e) {
        console.error(e);
        return {
            data: null,
            error: "회원 가입할 수 없습니다.",
        }
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

        const {data: {access_token}} = response;
        return {
            username,
            access_token,
            error: "",
        };
    } catch(e) {
        console.error(e);
        
        return {
            username: "",
            access_token: "",
            error: "유저 정보가 올바르지 않습니다.",
        }
    }   
    
}