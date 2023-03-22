import React from "react";

const DesignerProfile = (props) => {
    return <>
        <img alt={'avatar'} src={props.designerProfile?.designerProfile?.photos.large}/>
        <div>{props.designerProfile?.designerProfile?.fullName}</div>
        <div>{props.designerProfile?.designerProfile?.aboutMe}</div>
    </>
}

export default DesignerProfile