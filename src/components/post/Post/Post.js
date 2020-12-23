import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({id, title, content, author, createdAt, updatedAt, isOwner}) {
    return (
        <div className="post">
            <h3 className="post__title">{title}</h3>
            <div className="post__extra_info">
                {
                    (isOwner) ? (
                        <div className="post__extra_info__links">
                            <Link to={`/posts/update/${id}`}><span>수정</span></Link>
                            <Link to="/"><span>삭제</span></Link>
                        </div>
                    ) : (
                        <></>
                    )
                }
                <span>{author}</span>
                <span>{createdAt}</span>
                <span>{updatedAt}</span>
            </div>
            <p className="post__content">{content}</p>
            
        </div>
    )
}
