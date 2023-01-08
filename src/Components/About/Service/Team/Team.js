import style from './Team.module.css'
import React from 'react'
import Avatar from "@mui/material/Avatar";
import {Button} from "@mui/material";
import axios from "axios";

class Team extends React.Component {
    constructor(props) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setDesigners(response.data.items);
                })
        }

    render() {
        return <div>
            {
                this.props.designers.map(d => <div key={d.id} className={style.container}>
                        <div className={style.avatar}>
                            <Avatar src={d.photos.small}/>
                            <div>
                                {d.followed
                                    ?
                                    <Button
                                        variant="contained"
                                        size='small'
                                        onClick={() => {
                                            this.props.unfollow(d.id)
                                        }}
                                    >
                                        unfollow
                                    </Button>
                                    :
                                    <Button
                                        variant="contained"
                                        size='small'
                                        onClick={() => {
                                            this.props.follow(d.id)
                                        }}
                                    >
                                        follow
                                    </Button>
                                }

                            </div>
                        </div>
                        <div>
                            <div className={style.mainInfo}>
                                <div>{d.name}</div>
                                <div>{d.status}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                {'d.location.country'}
                            </div>
                            <div>
                                {'d.location.city'}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Team