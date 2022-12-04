import React from 'react'
import {connect} from "react-redux";
import VantagePosts from "./VantagePosts";

let mapStateToProps = (state) => {

    return {
        Main: state.Main
    }
}

const VantagePostsContainer = connect(mapStateToProps)(VantagePosts)

export default VantagePostsContainer