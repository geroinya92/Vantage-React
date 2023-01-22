import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setDesignersAC,
    setTotalUsersCountAC,
    unfollowAC
} from "../../../../Redux/Team-reducer";
import TeamPresentation from "./TeamPresentation";
import axios from "axios";



class Team extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setDesigners(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setDesigners(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <TeamPresentation
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
    }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(Team)