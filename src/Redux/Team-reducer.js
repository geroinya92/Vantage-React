let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_DESIGNERS = 'SET_DESIGNERS';

let initialState = {
    designers: []
};

export const teamReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                designers: state.designers.map(d => {
                    if (d.id === action.designerID) {
                        return {...d, followed: true}
                    }
                    return d;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                designers: state.designers.map(d => {
                    if (d.id === action.designerID) {
                        return {...d, followed: false}
                    }
                    return d;
                })
            }
        case SET_DESIGNERS:
            return {
                ...state,
                designers: [...state.designers, ...action.designers]
            }
        default:
            return state;
    }
}

export function followAC(designerID) {
    return {type: FOLLOW, designerID}
}

export function unfollowAC(designerID) {
    return {type: UNFOLLOW, designerID}
}

export function setDesignersAC(designers) {
    return {type: SET_DESIGNERS, designers}
}

export default teamReducer;