import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import DesignerProfile from "./DesignerProfile";
import {setDesignerProfile} from "../../../../../Redux/DesignerProfile-reducer";
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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setDesignerProfile(response.data);
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