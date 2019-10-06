import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', numberLikes: 15},
    {id: 2, message: 'This is my first post :)', numberLikes: 22}
];

let dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Bob'},
    {id: 4, name: 'Jim'}
];

let messages = [
    {id: 1, text: 'Hello'},
    {id: 2, text: 'Hi'},
    {id: 3, text: 'Yo!'},
    {id: 4, text: 'How are you doing?'}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
