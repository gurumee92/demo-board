import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navigator() {
    const [isAuth, setAuth] = useState(false);

    return (
        <div className="navigator">
            { 
                (isAuth) ? (
                    <>
                    <span><Link to="/posts/create">글쓰기</Link></span>
                    <span onClick={() => setAuth(false)}><Link to="/">로그아웃</Link></span>
                    </>
                ) : (
                    <span onClick={() => setAuth(true)}>로그인</span>
                )
            }
        </div>
    )
}
