import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { accountState } from 'stores/accounts';
import { loginModalState, signUpModalState } from 'stores/modals';
import { getAccessToken } from 'apis/accounts';

import "./LoginModal.css";

export default function LoginModal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const setAccount = useSetRecoilState(accountState);
    const setLoginModalUp = useSetRecoilState(loginModalState);
    const setSignUpModalUp = useSetRecoilState(signUpModalState);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (username === "") {
            setError("username이 비었습니다.");
            return;
        }

        if (password === "") {
            setError("password가 비었습니다.");
            return;
        }
        
        const response = await getAccessToken(username, password);
        setAccount({
            username: response.username,
            access_token: response.access_token
        });
        localStorage.setItem("username", response.username);
        localStorage.setItem("access_token", response.access_token);

        setUsername("");
        setPassword("");
        setError(response.error);
        setLoginModalUp(response.error !== "");
    };

    const onClickSignUp = () => {
        setLoginModalUp(false);
        setSignUpModalUp(true);
    }

    return (
        <div className="login__modal">
            <div className="login__modal__content">
                <h2>로그인</h2>
                
                <form className="login__modal__form" onSubmit={onSubmit}>
                    <label for="username">username</label>
                    <input  name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
                    <label for="password">password</label>
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>       
                    <div className="login__modal__button__area">
                        <button type="submit">submit</button>
                        <button onClick={() => setLoginModalUp(false)}>cancel</button>
                    </div>
                </form>
                
                <span onClick={onClickSignUp}>to signup</span> 
                <div className="login__modal_error">
                    { error }
                </div>
            </div>
        </div>
    )
}
