import React from "react";
import {connect} from "react-redux";
import DesignerProfile from "./DesignerProfile";
import {getProfile, getStatus, updateStatus} from "../../../../../Redux/DesignerProfile-reducer";
import { useParams } from 'react-router-dom';
import {compose} from "@reduxjs/toolkit";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

let mapStateToProps = (state) => {
    return {
        designerProfile: state.designerProfile.designerProfile,
        status: state.designerProfile.status,
        updateStatus: state.designerProfile.updateStatus,

    }
}
class DesignerProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match?.params?.userId
        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
                <DesignerProfile
                    {...this.props}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />


            )
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
)(DesignerProfileContainer)