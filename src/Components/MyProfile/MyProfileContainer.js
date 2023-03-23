import MyProfile from "./MyProfile";

import React from 'react'
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "@reduxjs/toolkit";

export default compose(
    withAuthNavigate
)(MyProfile)