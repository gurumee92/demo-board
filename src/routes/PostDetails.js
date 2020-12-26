import React from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import { getPostById, postListState } from '../stores/posts';
import { accountState } from '../stores/accounts';

export default function PostDetails() {
    const history = useHistory();
    const { id } = useParams();
    const user = useRecoilValue(accountState);
    const post = useRecoilValue(getPostById(id));
    const [postList, setPostList] = useRecoilState(postListState);

    const onDeleteClick = () => {
        const next = postList.filter(p => p.id !== post.id);
        setPostList(next);
        history.push("/");
        return <></>
    };
    
    if (!post) {
        return <>존재하지 않는 포스팅입니다.</>
    }

    return (
        <div className="post__details">
            <article className="post">
                <h3 className="post__title">{post.title}</h3>
                <div className="post__extra_info">
                    {
                        (user.username === post.author) ? (
                            <div className="post__extra_info__links">
                                <Link to={`/posts/update/${id}`}><span>수정</span></Link>
                                <span onClick={onDeleteClick}>삭제</span>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                    <span>{post.author}</span>
                    <span>{post.createdAt}</span>
                    <span>{post.updatedAt}</span>
                </div>
                <p className="post__content">{post.content}</p>
            </article>
        </div>
    )
}
