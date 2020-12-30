import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import PostItem from 'components/post/PostItem';
import { postListState }  from 'stores/posts';
import { getPostList } from 'apis/posts';

import "./Home.css";

export default function Home() {
    const [postList, setPostList] = useRecoilState(postListState);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getPostList();
            setPostList(data.map(p => ({
                ...p,
                author: p.owner_name,
                createdAt: p.created_at,
                updatedAt: p.updatedAt,
            })));
        };
        fetchData();
        return () => setPostList([]);
    }, [setPostList]);

    return (
        <div className="home">
            <div className="home__post__list">
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
