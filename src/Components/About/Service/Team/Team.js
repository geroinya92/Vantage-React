import style from './Team.module.css'
import React from 'react'
import Avatar from "@mui/material/Avatar";
import {Button} from "@mui/material";

function Team(props) {
    if (props.designers.length === 0) {
        props.setDesigners([
                {
                    id: 1,
                    fullName: 'John Dow',
                    followed: true,
                    avatar: 'https://www.edgecombebuilders.ca/wp-content/uploads/2019/01/John-Downs-Project-Coordinator.jpg',
                    status: 'Holidays',
                    location: {
                        city: 'London',
                        country: 'UK',
                    }
                },
                {
                    id: 2,
                    fullName: 'Jane Air',
                    followed: true,
                    avatar: 'http://almode.ru/uploads/posts/2021-02/1613808297_35-p-dzhein-oinesa-40.jpg',
                    status: 'Work hard',
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
                    }
                },
                {
                    id: 3,
                    fullName: 'Ronald Yellow',
                    followed: false,
                    avatar: 'https://static.ellitoral.com/um/fotos/128948_mcdonalds19.jpg',
                    status: 'Eat more, eat tasty',
                    location: {
                        city: 'New-York',
                        country: 'USA',
                    }
                },
                {
                    id: 4,
                    fullName: 'Brigit Jones',
                    followed: false,
                    avatar: 'https://resizer.mail.ru/p/db0b0ee4-b02b-51dd-b6fb-dacfb275b25e/AAACQ-FbSJXsfvFGJgLkquGXojxhkw1_2mepo_CCSYg4uOb0Dtb71qA6Ow7KtPP9EBXpe1ZBO_YZOX6YuhglTUBMTPk.jpg',
                    status: 'Crying',
                    location: {
                        city: 'London',
                        country: 'UK',
                    }
                }
            ]
        )
    }

    return (
        <div>
            {
                props.designers.map(d => <div key={d.id} className={style.container}>
                        <div className={style.avatar}>
                            <Avatar src={d.avatar}/>
                            <div>
                                {d.followed
                                    ?
                                    <Button
                                        variant="contained"
                                        size='small'
                                        onClick={() => {
                                            props.unfollow(d.id)
                                        }}
                                    >
                                        unfollow
                                    </Button>
                                    :
                                    <Button
                                        variant="contained"
                                        size='small'
                                        onClick={() => {
                                            props.follow(d.id)
                                        }}
                                    >
                                        follow
                                    </Button>
                                }

                            </div>
                        </div>
                        <div>
                            <div className={style.mainInfo}>
                                <div>{d.fullName}</div>
                                <div>{d.status}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                {d.location.country}
                            </div>
                            <div>
                                {d.location.city}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Team