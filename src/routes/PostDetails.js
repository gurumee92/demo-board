import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'; 

export default function PostDetails({ isAuth }) {
    let { id } = useParams();

    return (
        <div className="post__details">
            post details {id}
            {
                (isAuth) ? (
                    <>
                    <span><Link to="/posts/update">수정</Link></span>
                    <span><Link to="/">삭제</Link></span>
                    </>
                ) : (
                    <></>
                )
            }
        </div>
    )
}
