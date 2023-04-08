import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../Components/comon/FormsControls/FormsControls";
import {requiredField} from "../../utilities/Validations/validations";
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name='email' placeholder={'login'} component={Input} validate={[requiredField]}/></div>
            <div><Field name='password' placeholder={'password'} type={'password'} component={Input} validate={[requiredField]}/></div>
            <div><Field name='rememberMe ' type='checkbox' component={Input}/> Remember me</div>
            <div>
                <button type={'submit'}>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe )
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div style={{width: 1304, margin: 'auto'}}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
  
}

export default connect (mapStateToProps, {login} ) (Login)
