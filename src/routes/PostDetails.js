import React from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';

import Post from '../components/post/Post';
import { getPostById } from '../stores/posts';
import { accountState } from '../stores/accounts';

export default function PostDetails() {
    const { id } = useParams();
    const user = useRecoilValue(accountState);
    const post = useRecoilValue(getPostById(id));

    if (!post) {
        return <>존재하지 않는 포스팅입니다.</>
    }
    
    return (
        <div className="post__details">
            <Post id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    createdAt={post.createdAt}
                    updatedAt={post.updatedAt} 
                    isOwner={ user.username && post.author }
                    />
            
        </div>
    )
}
