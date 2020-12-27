import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { accountState } from 'stores/accounts';
import PostForm from 'components/post/PostForm';
import { getPost, updatePost } from 'apis/posts';

export default function PostUpdate() {
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
    
    if (account.username === "" || account.access_token === "") {
        history.push("/");
        return <></>;
    }

    const onSubmit = async (title, content) => {
        const response = await updatePost(id, title, content, account.access_token);

        if (response.error !== "") {
            setError(response.error);
            return <>{error}</>
        }
        
        history.goBack();
    };

    return (
        <div className="post__update">
            { post && <PostForm initTitle={post.title} initContent={post.content} onSubmit={onSubmit} /> }
        </div>
    )
}
