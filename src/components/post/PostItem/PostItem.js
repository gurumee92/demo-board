import React from 'react';
import { Link } from 'react-router-dom';

import "./PostItem.css";

export default function PostItem({id, title, content, author, createdAt}) {
    const collapsed = (content.length > 250) ? `${content.slice(0, 250)}...` : content;
    return (
            <div className="post__item">
                <Link to={`/posts/${id}`}>
                <h1 className="post__item__title">{title}</h1>
                <p className="post__item__content">{collapsed}</p>
                <div className="post__item__extra_info">
                    <span>{author}</span>
                    <span>{createdAt}</span>
                </div>
                </Link>
            </div>
    )
}
