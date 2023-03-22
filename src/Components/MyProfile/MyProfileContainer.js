import MyProfile from "./MyProfile";

import React from 'react'
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

let MyProfileContainer = withAuthNavigate(MyProfile)

export default MyProfileContainer