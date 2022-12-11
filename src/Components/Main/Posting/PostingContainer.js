import React from 'react'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/Main-reducer";
import Posting from './Posting'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        Main: state.Main,
        newPostText: state.Main.newPostText,
        newsData: state.Main.newsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(AddPostActionCreator())
        },

    }
}

const PostingContainer = connect(mapStateToProps, mapDispatchToProps)(Posting);

export default PostingContainer