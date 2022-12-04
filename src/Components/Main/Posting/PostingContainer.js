import React from 'react'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/Main-reducer";
import Posting from './Posting'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        Main: state.Main
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(AddPostActionCreator(text))
        },
        updateNewPostText: () => {
            dispatch(UpdateNewPostTextActionCreator())
        },
    }
}

const PostingContainer = connect(mapStateToProps, mapDispatchToProps)(Posting);

export default PostingContainer