import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../assets/img/avatar.jfif';
import {NavLink} from 'react-router-dom';

const UserItem = React.memo(({user, isAuth, isFollowingProgress, unfollow, follow}) => (
    <div className={styles.userItem}>
        <div className={styles.avatar}>
            <NavLink to={'/profile/'+user.id}>
                <img alt={'avatar'} src={user.photos.small !== null ? user.photos.small : userAvatar}/>
            </NavLink>
            {
                user.followed
                    ? <button disabled={!isAuth || isFollowingProgress.some(id => id === user.id)}
                              onClick={() => {unfollow(user.id)}}>Unfollow</button>
                    : <button disabled={!isAuth || isFollowingProgress.some(id => id === user.id)}
                              onClick={() => {follow(user.id)}}>Follow</button>
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
))

export default UserItem;