import React from "react";
import {connect} from "react-redux";
import DesignerProfile from "./DesignerProfile";
import {getProfile} from "../../../../../Redux/DesignerProfile-reducer";
import { useParams } from 'react-router-dom';

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
        this.props.getProfile(userId)
    }

    render() {
        return (
            <DesignerProfile {...this.props}  />
            )
    }
}
const WithUrlDataContainerComponent = withRouter(DesignerProfileContainer)

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)