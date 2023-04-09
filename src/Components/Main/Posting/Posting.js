import React from 'react'
import style from './Posting.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utilities/Validations/validations";
import {Textarea} from "../../comon/FormsControls/FormsControls";
import {Button} from "@mui/material";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {

    /*function duplicateCount(text) {
        let arr = text.toLowerCase().split('')
        let res = []
        let revisioned = []
        for (let i = 0; i < arr.length; i++) {
            res[i] = 0
            if (!revisioned.includes(arr[i])) {
                arr.forEach((el) => {
                    if (el === arr[i]) {
                        revisioned.push(el)
                        res[i]++
                    }
                })
            }
        }
        let resres = []
        res.forEach((el) => {
            if (el > 1) {
                resres.push(el)
            }
        })
        return (resres.length)
    }


    console.log(duplicateCount('text'))*/

    function isPrime(num) {
        if (Math.abs(num) > 1) {
            for (let i = 2; i < Math.abs(num); i++) {
                if (num % i === 0) {
                    return false
                    break
                } else {
                    return true
                    continue
                }
            }
        } else return false
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostText"
                    component={Textarea}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <Button variant={'contained'}>
                Publish
            </Button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'newPost'})(PostForm)

function Posting(props) {

    function addNewPost(value) {
       props.addPost(value.newPostText)
    }
    return (
        <div className={style.Container}>
            <PostReduxForm onSubmit={addNewPost} />
        </div>
    )
}

export default Posting;