import React from 'react';
import {Switch, Route} from "react-router-dom";
import BlogHeader from "./componets/Blog/BlogHeader/BlogHeader";
import BlogList from "./componets/Blog/BlogList/BlogList";
import BlogShow from "./componets/Blog/BlogShow/BlogShow";

const Routing = () => {
    return (
        <Switch>
            <Route path="/app/show">
                <BlogHeader/>
                <BlogShow/>
            </Route>
            <Route path="/app">
                <BlogHeader/>
                <BlogList/>
            </Route>
        </Switch>
    );
};

export default Routing;
