import React from 'react'
import style from './Posting.module.css'
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utilities/Validations/validations";
import {Textarea} from "../../comon/FormsControls/FormsControls";
import {Button} from "@mui/material";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostText"
                    component={Textarea}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <Button variant={'contained'} type={'submit'}>
                Publish
            </Button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'newPost'})(PostForm)

function Posting(props) {

    function addNewPost(value, dispatch) {
        props.addPost(value.newPostText)
        dispatch(reset('newPost'))
    }

    return (
        <div className={style.Container}>
            <PostReduxForm onSubmit={addNewPost}/>
        </div>
    )
}

export default Posting;