import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Alexander Kutsenko',
                status: 'I am Full-Stack developer',
                followed: false,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU',
                location: {
                    city: 'Kharkov',
                    country: 'Ukraine'
                }
            },
            {
                id: 2,
                fullName: 'Bob Sinclar',
                status: 'The rock star!',
                followed: false,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU',
                location: {
                    city: 'New York',
                    country: 'The USA'
                }
            },
            {
                id: 3,
                fullName: 'Donald Trump',
                status: 'The best president ever',
                followed: true,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU',
                location: {city: 'Washington', country: 'The USA'}
            },
            {
                id: 4,
                fullName: 'Vladimir Putin',
                status: 'Mr President',
                followed: true,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            }
        ]);
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id} className={styles.userItem}>
                        <div className={styles.avatar}>
                            <img alt={'avatar'} src={user.avatar}/>
                            {
                                user.followed
                                    ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                            }
                        </div>
                        <div>
                            <h3>{user.fullName}</h3>
                            <p>{user.status}</p>
                        </div>
                        <div className={styles.location}>
                            <p>{user.location.country}</p>
                            <p>{user.location.city}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;