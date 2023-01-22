let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_DESIGNERS = 'SET_DESIGNERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    designers: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,

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
            case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export function follow(designerID) {
    return {type: FOLLOW, designerID}
}

export function unfollow(designerID) {
    return {type: UNFOLLOW, designerID}
}

export function setDesigners(designers) {
    return {type: SET_DESIGNERS, designers}
}

export function setCurrentPage(currentPage) {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export function setTotalUsersCount(totalUsersCount) {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export function toggleIsFetching(isFetching) {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default teamReducer;