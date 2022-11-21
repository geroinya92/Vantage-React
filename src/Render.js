import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AddPost, SendMessage} from './Redux/State'

export function rerenderEntireTree (state) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} AddPost={AddPost} SendMessage={SendMessage} />
        </React.StrictMode>
    );
}

