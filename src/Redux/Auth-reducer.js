let SET_USER_DATA = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';

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
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
}
export function setAuthUserData(id, email, login) {
    return {type: SET_USER_DATA, data: {id, email, login}}
}

export default authReducer;