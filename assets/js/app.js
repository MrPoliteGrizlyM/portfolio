import React, { Component } from 'react';
import ReactDom from 'react-dom';
import BlogHeader from "./componets/Blog/BlogHeader/BlogHeader";
import BlogList from "./componets/Blog/BlogList/BlogList";
import Footer from "./componets/elements/Footer";


class App extends Component {
    render() {
        return (
            <>
                <BlogHeader/>
                <BlogList/>
                <Footer/>
            </>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));
