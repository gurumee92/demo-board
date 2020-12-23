import React from 'react';

import PostItem from '../components/post/PostItem';

export default function Home() {
    const postList = [
        {
            id: 1,
            title: "test",
            content: "test",
            author: "test",
            createdAt: "xxxx-xx-xx xx:xx:xx",
            updatedAt: "xxxx-xx-xx xx:xx:xx"
        },
        {
            id: 2,
            title: "test2",
            content: "test2",
            author: "test2",
            createdAt: "xxxx-xx-xx xx:xx:xx",
            updatedAt: "xxxx-xx-xx xx:xx:xx"
        },
    ];
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
