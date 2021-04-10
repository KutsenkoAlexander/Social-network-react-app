import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../assets/img/avatar.jfif';
import {NavLink} from 'react-router-dom';

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
                        key={pageNumber}
                        className={props.currentPage === pageNumber ? styles.selectedPage : ''}
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
                                ? <button disabled={!props.isAuth || props.isFollowingProgress.some(id => id === user.id)}
                                          onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                : <button disabled={!props.isAuth || props.isFollowingProgress.some(id => id === user.id)}
                                          onClick={() => {props.follow(user.id)}}>Follow</button>
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