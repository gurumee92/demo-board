import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigator() {
    return (
        <div className="navigator">
            <span><Link to="/posts/create">글쓰기</Link></span>
            <span><Link to="/">로그아웃</Link></span>
        </div>
    )
}
