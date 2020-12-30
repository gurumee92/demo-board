import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "./PostForm.css";

export default function PostForm({initTitle, initContent, onSubmit}) {
    const history = useHistory();
    const [title, setTitle] = useState(initTitle);
    const [content, setContent] = useState(initContent);
    const [error, setError] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (title === "") {
            setError("title이 비어있습니다.");
            return;
        }

        if (content === "") {
            setError("content가 비어있습니다.");
            return;
        }

        onSubmit(title, content);
    };

    const onClickCancel = () => {
        if (history.location.pathname === "/posts/create") {
            history.goBack();
        } else {
            history.go(1);
        }
    }

    return (
        <div className="post__form__wrapper">
            <form className="post__form" onSubmit={onSubmitForm}>
                <label htmlFor="title">제목</label>
                <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>        

                <label htmlFor="content">내용</label>
                <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                <div className="post__form__button__area">
                    <button type="submit">submit</button>
                    <button onClick={onClickCancel}>cancel</button>
                </div>
            </form>
            <div className="post__form__error__area">
                { error } 
            </div>
        </div>
    )
}
