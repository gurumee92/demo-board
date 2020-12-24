import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { accountState, accountListState } from '../../../stores/accounts';

export default function LoginModal({ setModalUp }) {
    const [isSignUp, setSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [error, setError] = useState("");

    const setAccount = useSetRecoilState(accountState);
    const [accountList, setAccountList] = useRecoilState(accountListState);


    const onSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            // service 혹은 api 변경 요망
            if (username === "") {
                setError("username이 비었습니다.");
                return;
            }

            if (password === "") {
                setError("password가 비었습니다.");
                return;
            }

            if (passwordCheck === "") {
                setError("passwordCheck이 비었습니다.");
                return;
            }

            if (password !== passwordCheck) {
                setError("비밀번호가 일치하지 않습니다.");
                return;
            }

            const exist = accountList.filter(a => a.username === username);
            
            if (exist.length > 0) {
                setError("존재하는 username입니다.");
                return;
            }
            
            const id = accountList[accountList.length - 1].id + 1;
            const newAccount = {
                id,
                username,
                password,
                access_token: `test${id}`
            }
            setAccountList((oldList) => [
                ...oldList,
                newAccount
            ]);
            setSignUp(!isSignUp);
            setUsername("");
            setPassword("");
            setPasswordCheck("");
            setError("");
            return;
        }

        if (username === "") {
            setError("username이 비었습니다.");
            return;
        }

        if (password === "") {
            setError("password가 비었습니다.");
            return;
        }
        const exist = accountList.filter(a => a.username === username);
            
        if (exist.length <= 0) {
            setError("존재하지 않는 username입니다.");
            return;
        }

        const find = exist[0];
        
        if (password !== find.password) {
            setError("비밀번호가 틀립니다.");
            return;
        }
        
        setAccount({
            username: find.username,
            access_token: find.access_token,
        });

        setUsername("");
        setPassword("");
        setError("");
        setModalUp(false);
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword= (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    };

    return (
        <div className="login__modal">
            <form className="login__modal__form" onSubmit={onSubmit}>
                <input name="username" type="text" value={username} onChange={onChangeUsername}/>
                <input name="password" type="password" value={password} onChange={onChangePassword}/>
                {
                    (isSignUp) ? (
                        <>
                        <input name="password_check" type="password" value={passwordCheck} onChange={onChangePasswordCheck}/>
                        <span onClick={() => setSignUp(!isSignUp)}>to login</span>
                        </>
                    ) : (
                        <>
                        <span onClick={() => setSignUp(!isSignUp)}>to signup</span>
                        </>
                    )
                }
                
                <button type="submit">submit</button>
                <span onClick={() => setModalUp(false)}>cancel</span>
                { error }
            </form>
        </div>
    )
}
