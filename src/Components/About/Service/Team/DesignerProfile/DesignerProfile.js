import React from "react";
import ProfileStatus from "../../../../MyProfile/ProfileStatus";
import login from "../../../../Login/Login";
import {Navigate} from "react-router-dom";

const DesignerProfile = (props) => {
    if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
    <>
        <img alt={'avatar'} src={props.designerProfile?.photos.large}/>
        <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <h1>{props.designerProfile?.fullName}</h1>
        <div>{props.designerProfile?.aboutMe}</div>

    </>
    )
}

export default DesignerProfile