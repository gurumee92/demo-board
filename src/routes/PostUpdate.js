import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { postListState, getPostById } from '../stores/posts';
import { accountState } from '../stores/accounts';
import PostForm from '../components/post/PostForm';

export default function PostUpdate() {
    const history = useHistory();
    const { id } = useParams();
    const account = useRecoilValue(accountState);
    const post = useRecoilValue(getPostById(id));
    const [postList, setPostList] = useRecoilState(postListState);

    if (!(post && post.author === account.username)) {
        history.goBack();
        return <></>;
    }

    const onSubmit = (title, content) => {
        const next = postList.map((p) =>`${p.id}` !== id ? p : {
            ...post,
            title,
            content
        });      
        setPostList(next);    
        history.goBack();
    };

    return (
        <div className="post__update">
            <PostForm initTitle={post.title} initContent={post.content} onSubmit={onSubmit} />
        </div>
    )
}
