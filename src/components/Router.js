import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { accountState } from '../stores/accounts';
import Home from "../routes/Home";
import PostCreate from "../routes/PostCreate";
import PostDetails from "../routes/PostDetails";
import PostUpdate from "../routes/PostUpdate";
import NotFound from "../routes/NotFound";



export default function Router() {
    const [account, setAccount] = useRecoilState(accountState);
    useEffect(() => {
        if (account.username === "" || account.access_token === "") {
            const username = localStorage.getItem("username");
            const access_token = localStorage.getItem("access_token");
            
            if (username !== null && access_token !== null) {
                setAccount({ username, access_token });
            }
        }
    })
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/posts/create">
                <PostCreate />
            </Route>
            <Route path="/posts/update/:id">
                <PostUpdate />
            </Route>
            <Route path="/posts/:id">
                <PostDetails />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}


