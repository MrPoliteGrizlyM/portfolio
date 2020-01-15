import React from 'react';
import {Switch, Route} from "react-router-dom";
import BlogHeader from "./componets/Blog/BlogHeader/BlogHeader";
import BlogList from "./componets/Blog/BlogList/BlogList";
import BlogShow from "./componets/Blog/BlogShow/BlogShow";

const Routing = () => {
    return (
        <Switch>
            <Route path="/app/show" component={BlogShow}/>
            <Route path="/app" component={BlogList}/>
        </Switch>
    );
};

export default Routing;
