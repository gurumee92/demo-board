import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { accountState } from 'stores/accounts';
import { getPost } from 'apis/posts';

export default function PostDetails() {
    const history = useHistory();
    const { id } = useParams();
    const user = useRecoilValue(accountState);
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async (id) => {
            const response = await getPost(id);
            const data = response.data;
            
            if (response.error !== "") {
                setError(response.error);
                setPost(null);
                return;
            }

            setPost({
                id: data.id,
                title: data.title,
                content: data.content,
                author: data.owner_name,
                createdAt: data.created_at,
                updatedAt: data.updated_at
            });
            setError("");
            
        };
        fetchData(id);
    }, [id]);

    const onDeleteClick = () => {
        // const next = postList.filter(p => p.id !== post.id);
        // setPostList(next);
        history.push("/");
        return <></>
    };
    
    if (!post) {
        return <>{ error }</>
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
