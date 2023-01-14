import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../routes/Home";
import PostCreate from "../routes/PostCreate";
import PostDetails from "../routes/PostDetails";
import PostUpdate from "../routes/PostUpdate";
import NotFound from "../routes/NotFound";



export default function Router() {    
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


