import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AddPost, SendMessage, updateNewMessageText, updateNewPostText} from './Redux/State'

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderEntireTree (state) {

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

