import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from "./Redux/State";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree (state) {

    root.render(
        <React.StrictMode>
            <App
                state={state}
                AddPost={store.AddPost.bind(store)}
                SendMessage={store.SendMessage.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree (store.getState());

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
