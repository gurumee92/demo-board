import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { accountState } from 'stores/accounts';
import { getPost, deletePost } from 'apis/posts';

export default function PostDetails() {
    const history = useHistory();
    const { id } = useParams();
    const [account, setAccount] = useRecoilState(accountState);
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
        return () => { 
            setPost(null);
            setError(""); 
        }
    }, [id]);

    if (account.username === "" || account.access_token === "") { 
        const username = localStorage.getItem("username");
        const access_token = localStorage.getItem("access_token");

        if (username && access_token) {
            setAccount({
                username,
                access_token
            });
        };
        return <></>
    }

    const onDeleteClick = async () => {
        const response = await deletePost(id, account.access_token);
        setError(response.error);

        if (response.error === "") {
            history.push("/");
            return <></>        
        }

        return <>{ error }</>
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
                        (account.username === post.author) ? (
                            <div className="post__extra_info__links">
                                <Link to={`/posts/update/${id}`}><span>수정</span></Link>
                                <span onClick={onDeleteClick}>삭제</span>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                    <span>작성자 : {post.author}</span> | 
                    <span>{post.createdAt}</span>
                    <span>{post.updatedAt}</span>
                </div>
                <p className="post__content">{post.content}</p>
            </article>
        </div>
    )
}
