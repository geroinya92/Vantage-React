import React from 'react'

import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/Main-reducer";

import Posting from './Posting'


function PostingContainer(props) {

    function AddPost() {
        props.dispatch(AddPostActionCreator())
    }

    function onPostChange(text) {
        let action = UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <Posting
            updateNewPostText={onPostChange}
            addPost={AddPost}
            newPostText={props.store.Main.newPostText}
        />
    );
}

export default PostingContainer