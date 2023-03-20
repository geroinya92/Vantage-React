import {profileApi} from "../api/api";

let SET_DESIGNER_PROFILE = 'SET_DESIGNER_PROFILE';


let initialState = {
    designerProfile: null,
};

export const designerProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DESIGNER_PROFILE:
            return { ...state, designerProfile: action.designerProfile }

        default:
            return state;
    }
}

export function setDesignerProfile(designerProfile) {
    return {type: SET_DESIGNER_PROFILE, designerProfile}
}

export const getProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId).then(data => {
        dispatch(setDesignerProfile(data));
    })
}


export default designerProfileReducer;