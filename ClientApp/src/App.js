import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Bdv from './components/bdv'

class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <Route path='/' exact strict component={Bdv} />
                </div>
            </Router>
        );
    }
}

export default App;