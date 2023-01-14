let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_DESIGNERS = 'SET_DESIGNERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    designers: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,

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
                designers: action.designers,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
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

export function setCurrentPageAC(currentPage) {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export function setTotalUsersCountAC(totalUsersCount) {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export default teamReducer;