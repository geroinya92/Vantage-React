import React from 'react'
import {TextField, Button} from "@mui/material";
import style from './Posting.module.css'

function Posting(props) {

    const newPostElement = React.createRef();

    function AddPost() {

        const text = newPostElement.current.value;
                props.AddPost(text)
        newPostElement.current.value = '';
    }

    return (
        <div className={style.Container}>
            <TextField
                inputRef={newPostElement}
                className={style.TextField}
                label="What's new?"
                id="What"
                rows
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