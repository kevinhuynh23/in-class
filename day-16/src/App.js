import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Homepage } from './Homepage';
import { Projects } from './Projects';
import { About } from './About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import your other components here

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Jacob',
            hobbies: ['I like React', 'I like to code']
        }
    }
    render() {
        return (<div>
                    <Router>
                        <div className="container">
                            <Link to="/">Home</Link>
                            {' - '}
                            <Link to="/about">About</Link>
                            {' - '}
                            <Link to="/projects"> Projects</Link>
                            <Route exact path="/" render={(props) =>
                                <Homepage {...props} name={this.state.name}/>  
                            }/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/about" render={(props) => <About {...props} items={this.state.hobbies}/>}/>
                        </div>
                    </Router>
                </div>
            );
    }
}

export default App;
