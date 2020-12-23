import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItem({id, title, content, author, createdAt}) {
    return (
        <Link to={`/posts/${id}`}>
            <div className="post__item">
                <h3 className="post__item__title">{title}</h3>
                <p className="post__item__content">{content}</p>
                <div className="post__item_extra_info">
                    <span>{author}</span>
                    <span>{createdAt}</span>
                </div>
            </div>
        </Link>
    )
}
