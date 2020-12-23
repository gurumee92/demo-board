import React from 'react';
import { useParams } from 'react-router';

import Post from '../components/post/Post';

export default function PostDetails({ isAuth }) {
    const { id } = useParams();
    const post = {
        title: `test${id}`,
        content: `test${id}`,
        author: "test",
        createdAt: "xxxx-xx-xx xx:xx:xx",
        updatedAt: "xxxx-xx-xx xx:xx:xx"
    };
    return (
        <div className="post__details">
            <Post id={post.id}
                title={post.title}
                content={post.content}
                author={post.author}
                createdAt={post.createdAt}
                updatedAt={post.updatedAt} 
                />
        </div>
    )
}
