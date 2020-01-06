import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routing from "./routing";
import Footer from "./componets/elements/Footer";


class App extends Component {
    render() {
        return (
            <Router>
                <div className={"content"}>
                    <Routing/>
                    <Footer/>
                </div>
            </Router>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));
