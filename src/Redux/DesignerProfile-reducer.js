import {profileApi} from "../api/api";

let SET_DESIGNER_PROFILE = 'SET_DESIGNER_PROFILE';
let SET_STATUS = 'SET_STATUS';


let initialState = {
    designerProfile: null,
    status: '',
};

export const designerProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DESIGNER_PROFILE:
            return {...state, designerProfile: action.designerProfile};


        case SET_STATUS:
            return {...state, status: action.status};

        default:
            return state;
    }
}

export function setDesignerProfile(designerProfile) {
    return {type: SET_DESIGNER_PROFILE, designerProfile}
}

export function setStatus(status) {
    return {type: SET_STATUS, status}
}

export const getProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId).then(data => {
        dispatch(setDesignerProfile(data));
    })
}

export const requestStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default designerProfileReducer;