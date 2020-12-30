import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import PostItem from 'components/post/PostItem';
import { postListState }  from 'stores/posts';
import { accountSelector } from 'stores/accounts';
import { getPostList } from 'apis/posts';

import "./Home.css";

export default function Home() {
    const [postList, setPostList] = useRecoilState(postListState);
    const account = useRecoilValue(accountSelector);
    const isAuth = (account.username !== "" && account.access_token !== "");

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
            {
               (isAuth) && (
                    <Link to="/posts/create">
                        <div className="home__fab-button">+</div>
                    </Link>    
                )
            }
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
