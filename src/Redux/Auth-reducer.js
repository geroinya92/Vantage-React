import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,

};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
export function setAuthUserData(id, email, login, isAuth) {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
}

export const getAuth = () => {
    return ((dispatch) => {
        authApi.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    })
}

export const login = (email, password, rememberMe) => {
    return((dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    })
}

export const logout = () => {
    return((dispatch) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    })
}

export default authReducer;