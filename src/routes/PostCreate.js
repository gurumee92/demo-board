import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import PostForm from '../components/post/PostForm';

export default function PostCreate({ isAuth }) {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    if (!isAuth) {
        history.goBack();
        return <></>;
    }

    return (
        <div className="post__create">
            <PostForm title={title} setTitle={setTitle} content={content} setContent={setContent} isCreateRequest />
        </div>
    )
}
