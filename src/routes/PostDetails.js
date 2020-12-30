import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { accountSelector } from 'stores/accounts';
import { getPost, deletePost } from 'apis/posts';

import "./PostDetails.css";

export default function PostDetails() {
    const history = useHistory();
    const { id } = useParams();
    const account = useRecoilValue(accountSelector);
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
                <div className="post__header">
                    <h1 className="post__title">{post.title}</h1>
                    <div className="post__extra_info">
                        <span>{post.author}</span>|<span>{post.createdAt}</span> 
                        {
                            (account.username === post.author) && (
                                <>
                                    |<span><Link to={`/posts/update/${id}`}>수정</Link></span>|<span onClick={onDeleteClick}>삭제</span>
                                </>
                            )
                        }
                    </div>
                </div>
                
                <p className="post__content">{post.content}</p>
            </article>
        </div>
    )
}
