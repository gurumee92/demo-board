import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import PostForm from '../components/post/PostForm';
import { postListState }  from '../stores/posts';
import { accountState } from '../stores/accounts';

export default function PostCreate() {
    const history = useHistory();
    const [postList, setPostList] = useRecoilState(postListState);
    const account = useRecoilValue(accountState);

    if (account.username === "" || account.access_token === "") {
        history.goBack();
        return <></>;
    }

    const onSubmit = (title, content) => {
        const next = [
            ...postList,
            {
                id: postList[postList.length-1].id + 1,
                title,
                content,
                author: account.username,
                createdAt: "xxxx-xx-xx xx:xx:xx",
                updatedAt: "xxxx-xx-xx xx:xx:xx"
            }  
        ];
        setPostList(next);
        history.push("/");
        return <></>
    };

    return (
        <div className="post__create">
            <PostForm initTitle="" initContent="" onSubmit={onSubmit} />
        </div>
    )
}
