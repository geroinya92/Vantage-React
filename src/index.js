import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import state, {subscribe} from "./Redux/State";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AddPost, SendMessage, updateNewMessageText, updateNewPostText} from './Redux/State'

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree (state) {

    root.render(
        <React.StrictMode>
            <App
                state={state}
                AddPost={AddPost}
                SendMessage={SendMessage}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree (state);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
