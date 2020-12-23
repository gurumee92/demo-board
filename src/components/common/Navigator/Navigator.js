import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import LoginModal from "../LoginModal";

export default function Navigator() {
    const [isAuth, setAuth] = useState(false);
    const [isModalUp, setModalUp] = useState(false);
    return (
        <div className="navigator">
            { 
                (isAuth) ? (
                    <>
                    <span><Link to="/posts/create">글쓰기</Link></span>
                    <span onClick={() => setAuth(!isAuth)}><Link to="/">로그아웃</Link></span>
                    </>
                ) : (
                    <span onClick={() => setModalUp(!isModalUp)}>로그인</span>
                )
            }

            {
                (isModalUp) ? (
                    <LoginModal setAuth={setAuth} setModalUp={setModalUp} />
                ) : (
                    <></>
                )
            }
        </div>
    )
}
