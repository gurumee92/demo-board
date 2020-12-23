import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import PostCreate from "./PostCreate";
import PostDetails from "./PostDetails";
import PostUpdate from "./PostUpdate";
import NotFound from "./NotFound";



export default function Router({isAuth}) {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/posts/create">
                <PostCreate isAuth={isAuth}/>
            </Route>
            <Route path="/posts/update">
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


