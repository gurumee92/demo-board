import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import PostForm from '../components/post/PostForm';

export default function PostUpdate({ isAuth }) {
    const history = useHistory();
    const [title, setTitle] = useState("test");
    const [content, setContent] = useState("test");
    
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
