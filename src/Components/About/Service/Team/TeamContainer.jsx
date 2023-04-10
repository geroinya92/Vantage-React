import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setDesigners,
    toggleFollowingProgress,
    unfollow
} from "../../../../Redux/Team-reducer";
import TeamPresentation from "./TeamPresentation";
import {LinearProgress} from "@mui/material";
import {
    getDesigners,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,} from '../../../../Redux/Team-selector'


function mapStateToProps(state) {
    return {
        designers: getDesigners(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

class Team extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <>
            {this.props.isFetching ? <LinearProgress /> : null}
            <TeamPresentation
                setCurrentPage={this.props.setCurrentPage}
                setDesigners={this.props.setDesigners}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                designers={this.props.designers}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setDesigners,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
    })
(Team)