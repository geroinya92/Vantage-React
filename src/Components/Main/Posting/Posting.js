import React from 'react'
import {Button, TextareaAutosize} from "@mui/material";
import style from './Posting.module.css'

function Posting(props) {

    const newPostElement = React.createRef();

    function AddPost() {

        const text = newPostElement.current.value;
        props.AddPost(text);

    };

    function onPostChange() {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                onClick={AddPost}
            >
                Publish
            </Button>
        </div>
    )
}

export default Posting