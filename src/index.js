import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, text: 'Hello World!', likeCount: 10},
    {id: 2, text: 'It\'s second post.', likeCount: 3}
];

let dialogs = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Marty'},
    {id: 3, name: 'Tom'},
    {id: 4, name: 'Jerry'},
    {id: 5, name: 'Barbara'}
];

let messages = [
    {id: 1, text: 'Hello'},
    {id: 2, text: 'Morning!'},
    {id: 3, text: 'Yo'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
