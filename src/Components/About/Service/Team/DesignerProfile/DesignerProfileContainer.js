import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import DesignerProfile from "./DesignerProfile";
import {setDesignerProfile} from "../../../../../Redux/DesignerProfile-reducer";

let mapStateToProps = (state) => {
    return {
        designerProfile: state.designerProfile,
    }
}

class DesignerProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setDesignerProfile})(DesignerProfileContainer)