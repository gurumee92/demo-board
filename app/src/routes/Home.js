import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import PostItem from 'components/post/PostItem';
import { accountSelector } from 'stores/accounts';
import { spinnerState } from 'stores/spinner';
import { getPostList, searchPosts } from 'apis/posts';

import "./Home.css";

export default function Home() {
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState("");
    const [postList, setPostList] = useState([]);    
    const account = useRecoilValue(accountSelector);
    const [isSpinnerUp, setSpinnerUp] = useRecoilState(spinnerState);
    const isAuth = (account.username !== "" && account.access_token !== "");

    useEffect(() => {
        const fetchData = async () => {
            setSpinnerUp(true);
            const { data } = await getPostList();
            setTimeout(() => {
                setSpinnerUp(false)
            }, 1000);

            setPostList(data.map(p => ({
                ...p,
                author: p.owner_name,
                createdAt: p.created_at,
                updatedAt: p.updatedAt,
            })));
            
        };
        
        fetchData();
        return () => setPostList([]);
    }, [setPostList, setSpinnerUp]);

    const onSubmit = async () => {
        if (searchText === "") {
            setError("검색어를 입력하세요.");
            return;
        }

        setSpinnerUp(true);
        const { data } = await searchPosts(searchText);
        setTimeout(() => {
            setSpinnerUp(false)
        }, 1000);

        setPostList(data.map(p => ({
            ...p,
            author: p.owner_name,
            createdAt: p.created_at,
            updatedAt: p.updatedAt,
        })));
        setSearchText("");
        setError("");
    }

    return (
        <div className="home">
            {
               (isAuth) && (
                    <Link to="/posts/create">
                        <div className="home__fab-button">+</div>
                    </Link>    
                )
            }
            <div className="home__search">
                <input type="text" placeholder="검색어를 입력하세요." value={searchText} onChange={e => setSearchText(e.target.value)}/>
                <button onClick={onSubmit}>search</button>
                <div className="home__search__error">
                    {error}
                </div>
            </div>
            <div className="home__post__list">
            {
                (postList.length > 0) ? (
                    postList.map((p) => <PostItem key={p.id}
                                                id={p.id}
                                                title={p.title}
                                                content={p.content}
                                                author={p.author}
                                                createdAt={p.createdAt}
                                                />)
                ) : (
                    (!isSpinnerUp) && (
                        <div className="home__post__list__empty__result">
                            검색 결과가 없습니다.
                        </div>
                    )
                )
            }
            </div>
        </div>
    )
};
