import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setDesigners,
    setTotalUsersCount, toggleIsFetching,
    unfollow
} from "../../../../Redux/Team-reducer";
import TeamPresentation from "./TeamPresentation";
import axios from "axios";
import {LinearProgress} from "@mui/material";


function mapStateToProps(state) {
    return {
        designers: state.teamPage.designers,
        pageSize: state.teamPage.pageSize,
        totalUsersCount: state.teamPage.totalUsersCount,
        currentPage: state.teamPage.currentPage,
        isFetching: state.teamPage.isFetching,

    }
}



class Team extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setDesigners(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setDesigners(response.data.items);
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
            />
        </>

    }
}

export default connect(mapStateToProps, {follow, unfollow, setDesigners, setCurrentPage, setTotalUsersCount, toggleIsFetching })(Team)