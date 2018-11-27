import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

const config = {
        apiKey: "AIzaSyB0y--IC7yo2iWVTHuuOWtLVSWNgZoLm9E",
        authDomain: "info-auth-e7f30.firebaseapp.com",
        databaseURL: "https://info-auth-e7f30.firebaseio.com",
        projectId: "info-auth-e7f30",
        storageBucket: "info-auth-e7f30.appspot.com",
        messagingSenderId: "320548498580"
      };

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
