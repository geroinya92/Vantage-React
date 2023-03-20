import React from 'react'
import style from "./Team.module.css";
import Avatar from "@mui/material/Avatar";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const TeamPresentation = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={style.pagination}>
            <div className={style.pageNumber}>
                {pages.map(p => {
                    return <a
                        href={'#'}
                        className={props.currentPage === p && style.selectedPage}
                        onClick={(event) => {
                            props.onPageChanged(p);
                        }}
                    >
                        {p}
                    </a>
                })
                }
            </div>
        </div>

        {
            props.designers.map(d => <div key={d.id} className={style.container}>

                    <div className={style.avatar}>
                        <NavLink to={'profile/' + d.id}>
                            <Avatar src={d.photos.small}/>
                        </NavLink>
                        <div>
                            {d.followed ? (
                                <Button
                                    disabled={props.followingInProgress.some(id => id === d.id)}
                                    variant="contained"
                                    size='small'
                                    onClick={() => props.unfollow(d.id)}
                                >
                                    unfollow
                                </Button>
                            ) : (
                                <Button
                                    disabled={props.followingInProgress.some(id => id === d.id)}
                                    variant="contained"
                                    size='small'
                                    onClick={() => props.follow(d.id)}
                                >
                                    follow
                                </Button>
                            )
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

export default TeamPresentation