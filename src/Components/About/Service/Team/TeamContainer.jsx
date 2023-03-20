import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setDesigners,
    setTotalUsersCount, toggleFollowingProgress, toggleIsFetching,
    unfollow
} from "../../../../Redux/Team-reducer";
import TeamPresentation from "./TeamPresentation";
import {LinearProgress} from "@mui/material";
import {usersApi} from "../../../../api/api";


function mapStateToProps(state) {
    return {
        designers: state.teamPage.designers,
        pageSize: state.teamPage.pageSize,
        totalUsersCount: state.teamPage.totalUsersCount,
        currentPage: state.teamPage.currentPage,
        isFetching: state.teamPage.isFetching,
        followingInProgress: state.teamPage.followingInProgress,

    }
}



class Team extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setDesigners(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setDesigners(data.items);
            })
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

export default connect(mapStateToProps, {follow, unfollow, setDesigners, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(Team)