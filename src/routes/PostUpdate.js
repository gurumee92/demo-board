import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import PostForm from '../components/post/PostForm';

export default function PostUpdate({ isAuth }) {
    const history = useHistory();
    const id = useParams();
    const [title, setTitle] = useState("test" + id);
    const [content, setContent] = useState("test" + id);
    
    if (!isAuth) {
        history.goBack();
        return <></>;
    }
    
    return (
        <div className="post__update">
            <PostForm title={title} setTitle={setTitle} content={content} setContent={setContent} />
        </div>
    )
}
