import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { accountState } from 'stores/accounts';
import { loginModalState, signUpModalState } from 'stores/modals';
import { getAccessToken } from 'apis/accounts';

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
            <form className="login__modal__form" onSubmit={onSubmit}>
                <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>        
                <button type="submit">submit</button>
            </form>
            <div className="login__modal_error">
                { error }
            </div>
            <span onClick={onClickSignUp}>to signup</span> | 
            <span onClick={() => setLoginModalUp(false)}>cancel</span>
        </div>
    )
}
