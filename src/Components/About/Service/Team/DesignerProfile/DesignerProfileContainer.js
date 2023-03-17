import React from "react";
import {connect} from "react-redux";
import DesignerProfile from "./DesignerProfile";
import {setDesignerProfile} from "../../../../../Redux/DesignerProfile-reducer";
import { useParams } from 'react-router-dom';
import {profileApi} from "../../../../../api/api";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

let mapStateToProps = (state) => {
    return {
        designerProfile: state.designerProfile,
    }
}

class DesignerProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match?.params?.userId
        profileApi.getProfile(userId)
            .then(data => {
                this.props.setDesignerProfile(data);
            })
    }

    render() {
        return (
            <DesignerProfile {...this.props}  />
            )
    }
}
const WithUrlDataContainerComponent = withRouter(DesignerProfileContainer)

export default connect(mapStateToProps, {setDesignerProfile})(WithUrlDataContainerComponent)