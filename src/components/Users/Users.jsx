import React from 'react';
import styles from "./Users.module.css";
import userAvatar from "../../assets/img/avatar.jfif";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {
                pages.map(pageNumber => {
                    return <span
                        className={props.currentPage === pageNumber && styles.selectedPage}
                        onClick={() => { props.onPageChanged(pageNumber) }}>
                            {pageNumber}
                        </span>;
                })
            }
        </div>
        {
            props.users.map(user =>
                <div key={user.id} className={styles.userItem}>
                    <div className={styles.avatar}>
                        <img alt={'avatar'} src={user.photos.small !== null ? user.photos.small : userAvatar}/>
                        {
                            user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>
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
}

export default Users;