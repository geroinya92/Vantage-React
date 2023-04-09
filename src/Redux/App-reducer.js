import {getAuth} from "./Auth-reducer";

let INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export function initializeSuccess() {
    return {type: INITIALIZED_SUCCESS}
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth())
      Promise.all([promise])
            .then(() => {
                dispatch(initializeSuccess())
            })
}