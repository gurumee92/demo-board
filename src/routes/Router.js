import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import PostCreate from "./PostCreate";
import PostDetails from "./PostDetails";
import PostUpdate from "./PostUpdate";
import NotFound from "./NotFound";

export default function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/posts/create">
                    <PostCreate />
                </Route>
                <Route path="/posts/update">
                    <PostUpdate />
                </Route>
                <Route path="/posts/:id">
                    <PostDetails />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </HashRouter>
    )
}

