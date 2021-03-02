import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userAvatar from "./../../assets/img/avatar.jfif";

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id} className={styles.userItem}>
                        <div className={styles.avatar}>
                            <img alt={'avatar'} src={user.photos.small !== null ? user.photos.small : userAvatar}/>
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
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                        </div>
                        <div className={styles.location}>
                            <p>{"user.location.country"}</p>
                            <p>{"user.location.city"}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;