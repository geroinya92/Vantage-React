import React from 'react'
import {connect} from "react-redux";
import VantagePosts from "./VantagePosts";
import {compose} from "@reduxjs/toolkit";

let mapStateToProps = (state) => {

    return {
        Main: state.Main
    }
}

export default compose(
    connect(mapStateToProps)
)(VantagePosts)