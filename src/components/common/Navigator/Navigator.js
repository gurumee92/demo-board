import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { accountState } from 'stores/accounts';
import { loginModalState } from 'stores/modals'

export default function Navigator() {
    const [isLoginModalUp, setLoginModalUp] = useRecoilState(loginModalState);
    const [account, setAccount] = useRecoilState(accountState);
    const isAuth = (account.username !== "" && account.access_token !== "");
    const logout = () => {
        setAccount({
            username: "",
            access_token: "",
        });
    };
    
    return (
        <div className="navigator">
            { 
                (isAuth) ? (
                    <>
                    <span><Link to="/posts/create">글쓰기</Link></span>
                    <span onClick={() => logout()}>로그아웃</span>
                    </>
                ) : (
                    <span onClick={() => setLoginModalUp(!isLoginModalUp)}>로그인</span>
                )
            }
        </div>
    )
}
