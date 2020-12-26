import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { accountState } from '../stores/accounts';
import Home from "../routes/Home";
import PostCreate from "../routes/PostCreate";
import PostDetails from "../routes/PostDetails";
import PostUpdate from "../routes/PostUpdate";
import NotFound from "../routes/NotFound";



export default function Router() {
    const account = useRecoilValue(accountState);
    const isAuth = (account.username !== "" && account.access_token !== "");

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/posts/create">
                <PostCreate />
            </Route>
            <Route path="/posts/update/:id">
                <PostUpdate isAuth={isAuth}/>
            </Route>
            <Route path="/posts/:id">
                <PostDetails isAuth={isAuth}/>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}


