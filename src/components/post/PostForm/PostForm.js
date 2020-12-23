import React from 'react'
import { useHistory } from 'react-router-dom';

export default function PostForm({title, content, setTitle, setContent, isCreateRequest}) {
    const history = useHistory();

    const onChangeTitle = (e) => {
        const value = e.target.value;
        setTitle(value);
    };

    const onChangeContent = (e) => {
        const value = e.target.value;
        setContent(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (isCreateRequest) {
            console.log("create post");
            history.push("/");
        } else {
            console.log("update post");
            history.goBack();
        }
        
        console.log(title, content);
        return (<></>)
    };

    return (
        <div>
            <form className="post__form" onSubmit={onSubmit}>
                <input type="text" value={title} onChange={onChangeTitle}></input>        
                <textarea value={content} onChange={onChangeContent}></textarea>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
