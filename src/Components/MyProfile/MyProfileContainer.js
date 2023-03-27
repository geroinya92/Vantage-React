
import React from 'react'
import {compose} from "@reduxjs/toolkit";
import DesignerProfile from "../About/Service/Team/DesignerProfile/DesignerProfile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/DesignerProfile-reducer";
import {withRouter} from "../About/Service/Team/DesignerProfile/DesignerProfileContainer";

let mapStateToProps = (state) => {
    return {
        designerProfile: state.designerProfile.designerProfile,
        status: state.designerProfile.status,
        updateStatus: state.designerProfile.updateStatus,
    }
}

class MyProfileContainer extends React.Component {

    componentDidMount() {
        let userId = '28404'
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div style={{width: '1304px', margin: '20px auto' }}>
                <DesignerProfile
                    {...this.props}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
)(MyProfileContainer)