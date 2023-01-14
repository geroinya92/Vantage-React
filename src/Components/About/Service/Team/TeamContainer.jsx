import React from "react";
import {connect} from "react-redux";
import Team from "./Team";
import {
    followAC,
    setCurrentPageAC,
    setDesignersAC,
    setTotalUsersCountAC,
    unfollowAC
} from "../../../../Redux/Team-reducer";

function mapStateToProps(state) {
    return {
        designers: state.teamPage.designers,
        pageSize: state.teamPage.pageSize,
        totalUsersCount: state.teamPage.totalUsersCount,
        currentPage: state.teamPage.currentPage,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (designerID) => {
            dispatch(followAC(designerID))
        },
        unfollow: (designerID) => {
            dispatch(unfollowAC(designerID))
        },
        setDesigners: (designers) => {
            dispatch(setDesignersAC(designers))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Team)