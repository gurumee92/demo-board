import React from 'react';
import { useRecoilValue } from 'recoil';

import PostItem from '../components/post/PostItem';
import { postListState }  from '../stores/posts';

export default function Home() {
    const postList = useRecoilValue(postListState);
    
    return (
        <div className="home">
            <div className="home__post_list">
            {
                postList.map((p) => <PostItem key={p.id}
                    id={p.id}
                    title={p.title}
                    content={p.content}
                    author={p.author}
                    createdAt={p.createdAt}
                    />)
            }
            </div>
        </div>
    )
};
