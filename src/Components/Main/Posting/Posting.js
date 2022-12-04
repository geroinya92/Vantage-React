import React from 'react'
import {Button, TextareaAutosize} from "@mui/material";
import style from './Posting.module.css'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/Main-reducer";
import Post from "../VantagePosts/Post/Post";

function Posting(props) {

    const newPostElement = React.createRef();

    function onAddPost() {

        props.addPost()
    };

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

        return (
            <div className={style.Container}>
                <TextareaAutosize
                    value={props.newPostText}
                    ref={newPostElement}
                    style={{
                        width: 200,
                        height: 50,
                    }}
                    label="What's new?"
                    id="What"
                    rows
                    onChange={onPostChange}
                />
                <Button
                    variant="contained"
                    className={style.Button}
                    onClick={onAddPost}
                >
                    Publish
                </Button>
            </div>
        )
    }

export default Posting;