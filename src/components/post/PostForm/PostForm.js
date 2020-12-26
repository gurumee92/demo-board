import React, {useState} from 'react'

export default function PostForm({initTitle, initContent, onSubmit}) {
    const [title, setTitle] = useState(initTitle);
    const [content, setContent] = useState(initContent);
    const  [error, setError] = useState("");

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

    return (
        <div>
            <form className="post__form" onSubmit={onSubmitForm}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>        
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">submit</button>
            </form>
            {error}
        </div>
    )
}
