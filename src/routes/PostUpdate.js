import React, { useState } from 'react';
import { useParams } from 'react-router';
// import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getPostById } from '../stores/posts';
// import { accountState } from '../stores/accounts';

export default function PostUpdate() {
    // const history = useHistory();
    const { id } = useParams();
    const post = useRecoilValue(getPostById(id));
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const onSubmit = (e) => {
        e.preventDefault();
        setTitle("");  
        setContent("");
    };

    return (
        <div className="post__update">
            <form className="post__form" onSubmit={onSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>        
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
