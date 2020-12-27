import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import PostForm from 'components/post/PostForm';
import { accountState } from 'stores/accounts';
import { createPost } from 'apis/posts';

export default function PostCreate() {
    const history = useHistory();
    const [error, setError] = useState("");
    const [account, setAccount] = useRecoilState(accountState);

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
        history.goBack();
        return <></>;
    }

    const onSubmit = async (title, content) => {
        const response = await createPost(title, content, account.access_token);
        
        if (response.error !== "") {
            setError(response.error);
            return <>{error}</>;
        }
        history.push("/");
        return <></>;
    };

    return (
        <div className="post__create">
            <PostForm initTitle="" initContent="" onSubmit={onSubmit} />
        </div>
    );
}
