import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { loginModalState, signUpModalState } from 'stores/modals';
import { createAccount } from 'apis/accounts';

export default function SignUpModalSignUpModal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [error, setError] = useState("");

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

        if (passwordCheck === "") {
            setError("password check이 비었습니다.");
            return;
        }

        if (password !== passwordCheck) {
            setError("비밀번호/확인이 일치하지 않습니다.");
            return;
        }

        const response = await createAccount(username, password);
        setError(response.error);

        if (response.error !== "") {
            return;
        } 

        setUsername("");
        setPassword("");
        setPasswordCheck("");
        setSignUpModalUp(false);
        setLoginModalUp(true);
    };

    const onClickLogin = () => {
        setLoginModalUp(true);
        setSignUpModalUp(false);
    }

    return (
        <div className="signup__modal">
            <form className="signup__modal__form" onSubmit={onSubmit}>
                <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>    
                <input name="passwordCheck" type="password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)}/>        
                <button type="submit">submit</button>
            </form>
            <span onClick={onClickLogin}>to login</span> |  <span onClick={() => setSignUpModalUp(false)}>cancel</span>
            { error }
        </div>
    )
}
