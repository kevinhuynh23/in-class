import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';

// Application (which is just an auth component)
class App extends Component {
    // Set initial state in constructor
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            email: '',
            password: '',
            username: '',
            errorMessage: ''
        };
    }
    componentDidMount() {
        // Listen to state authentication state change
        firebase.auth().onAuthStateChanged((user) => {
            // If there is a user, set the state of `user`
            if(user) {
                this.setState(
                    {
                        user: user,
                        email: '',
                        password:'',
                        errorMessage:''
                    }
                )
            } else {
                this.setState( {user: null});
            }
        })


    }
    // Method for handling changes to forms
    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }
    // Method for handling someone signing up 
    handleSignUp() {

        // Create a new user and save their information, THEN
        // - Update the display name of the user
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.passsword)
            .then(() => {
                let profilePromise = firebase.auth().currentUser.updateProfile({
                    displayName: this.state.username
                })
                return profilePromise;
            })
            .then(() => {
                this.setState({
                    user: firebase.auth().currentUser,
                    username: ''
                })
            }).catch((err) => {
                this.setState({ errorMessage: err.message })
            })
        // - Return promise for chaining, THEN
        // - Set the state as the current (firebase) user
    }

    // Method for handling someone signing in
    handleSignIn() {
        // Sign in the user -- this will trigger the onAuthStateChanged() method
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
                this.setState({errorMessage:err.message})
            })
    }

    // Method for handling someone signing out
    handleSignOut() {
        // Sign out the user -- this will trigger the onAuthStateChanged() method
        firebase.auth().signOut()
            .catch((err) => {
                this.setState({errorMessage:err.message})
            })
    }
    render() {
        let userDiv = this.state.user === null ? "" : <div className="alert alert-info">Hello, {this.state.user.displayName}</div>;
        let errorDiv = this.state.errorMessage === "" ? "" : <div className="alert-alery-danger">Error: {this.state.errorMessage}</div>;
        // Create (and render) divs to welcome the user / show errors 
        return (
            <div className="container">
            {errorDiv}
            {userDiv}
                <div className="form-group">
                    <label>Email:</label>
                    <input className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSignUp()}>
                        Sign Up
                     </button>
                    <button className="btn btn-success mr-2" onClick={() => this.handleSignIn()}>
                        Sign In
                    </button>
                    <button className="btn btn-danger mr-2" onClick={() => this.handleSignOut()}>
                        Sign Out
                    </button>
                </div>
            </div>

        );
    }
}

export default App;
