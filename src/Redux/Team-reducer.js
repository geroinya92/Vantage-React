import {usersApi as userApi, usersApi} from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_DESIGNERS = 'SET_DESIGNERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    designers: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

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
            case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.designerID]
                    : state.followingInProgress.filter(id => id != action.designerID),
            }
        default:
            return state;
    }
}

export function followSuccess(designerID) {
    return {type: FOLLOW, designerID}
}

export function unfollowSuccess(designerID) {
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

export function toggleFollowingProgress(isFetching, designerID) {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, designerID}
}

export const getUsers = (currentPage, pageSize) => {
    return ((dispatch) => {
            dispatch(toggleIsFetching(true))
            usersApi.getUsers(currentPage, pageSize)
                .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setDesigners(data.items));
                    dispatch(setTotalUsersCount(data.totalCount));
                })
        }
    )
}

export const follow = (userId) => {
    return ((dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            userApi.follow(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(followSuccess(userId))
                    }
                    dispatch(toggleFollowingProgress(false, userId));
                })
        }
    )
}

export const unfollow = (userId) => {
    return ((dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            userApi.unfollow(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unfollowSuccess(userId))
                    }
                    dispatch(toggleFollowingProgress(false, userId));
                })
        }
    )
}


export default teamReducer;