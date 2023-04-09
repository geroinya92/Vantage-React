import React from 'react'
import {AddPostActionCreator} from "../../../Redux/Main-reducer";
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
        addPost: (newPostText) => {
            dispatch(AddPostActionCreator(newPostText))
        },
    }
}

const PostingContainer = connect(mapStateToProps, mapDispatchToProps)(Posting);

export default PostingContainer