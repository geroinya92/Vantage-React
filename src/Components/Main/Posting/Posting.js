import React from 'react'
import {Button, TextareaAutosize} from "@mui/material";
import style from './Posting.module.css'

function Posting(props) {

    const newPostElement = React.createRef();

    function AddPost() {

        const text = newPostElement.current.value;
        props.dispatch({type: 'ADD-POST'});

    };

    function onPostChange() {
        const text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
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