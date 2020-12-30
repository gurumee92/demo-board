import React from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

import { accountState, accountSelector } from 'stores/accounts';
import { loginModalState } from 'stores/modals'

import "./Navigator.css";

export default function Navigator() {
    const [isLoginModalUp, setLoginModalUp] = useRecoilState(loginModalState);
    const account = useRecoilValue(accountSelector);
    const setAccount = useSetRecoilState(accountState);
    const isAuth = (account.username !== "" && account.access_token !== "");
    
    const logout = () => {
        setAccount({
            username: "",
            access_token: "",
        });
        localStorage.removeItem("username");
        localStorage.removeItem("access_token");
    };
    
    return (
        <div className="navigator">
            { 
                (isAuth) ? (
                    <>
                    <div className="navigator__button" onClick={() => logout()}>
                        <div className="navigator__button__text">
                            로그아웃
                        </div>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="navigator__button" onClick={() => setLoginModalUp(!isLoginModalUp)}>
                        <div className="navigator__button__text">
                            로그인
                        </div>    
                    </div>
                    </>
                )
            }
        </div>
    )
}
