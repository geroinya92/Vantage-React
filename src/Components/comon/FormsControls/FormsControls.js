import React from "react";
import style from './FormsControls.module.css'
import clsx from "clsx";

export const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div  className={clsx(style.formControl, hasError && style.error)}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}