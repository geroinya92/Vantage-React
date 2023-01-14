import style from './Team.module.css'
import React from 'react'
import Avatar from "@mui/material/Avatar";
import {Button} from "@mui/material";
import axios from "axios";

class Team extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setDesigners(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setDesigners(response.data.items);
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                            className={this.props.currentPage === p && style.selectedPage}
                            onClick={(event) => { this.onPageChanged(p); }}
                        >
                            {p}
                        </a>
                    })
                    }
                </div>
            </div>

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