import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routing from "./routing";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Footer from "./componets/elements/Footer";

const client = new ApolloClient({
    uri: `http://${window.location.host}/api/`,
});

class App extends Component {
    render() {
        return (
                <Router>
                    <ApolloProvider client={client}>
                        <div className={"content"}>
                            <Routing/>
                            <Footer/>
                        </div>
                    </ApolloProvider>
                </Router>
    )}
}

ReactDom.render(<App />, document.getElementById('root'));
