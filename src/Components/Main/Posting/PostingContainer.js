import React from 'react'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/Main-reducer";
import Posting from './Posting'
import StoreContext from "../../../StoreContext";

function PostingContainer() {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                function AddPost() {
                    store.dispatch(AddPostActionCreator())
                }

                function onPostChange(text) {
                    let action = UpdateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <Posting
                    updateNewPostText={onPostChange}
                    addPost={AddPost}
                    newPostText={state.Main.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
    );
}

export default PostingContainer