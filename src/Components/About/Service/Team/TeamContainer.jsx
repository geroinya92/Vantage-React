import React from "react";
import {connect} from "react-redux";
import Team from "./Team";
import {followAC, setDesignersAC, unfollowAC} from "../../../../Redux/Team-reducer";

function mapStateToProps(state) {
    return {
        designers: state.teamPage.designers
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
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Team)