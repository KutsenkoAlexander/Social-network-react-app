import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../assets/img/avatar.jfif';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/usersApi";

const Users = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = Math.ceil(100 / props.pageSize);

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
                        <NavLink to={'/profile/'+user.id}>
                            <img alt={'avatar'} src={user.photos.small !== null ? user.photos.small : userAvatar}/>
                        </NavLink>
                        {
                            user.followed
                                ? <button disabled={props.isFollowingProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.unfollow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.isFollowingProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.follow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                }}>Follow</button>
                        }
                    </div>
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.status}</p>
                    </div>
                    <div className={styles.location}>
                        <p>{'user.location.country'}</p>
                        <p>{'user.location.city'}</p>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;