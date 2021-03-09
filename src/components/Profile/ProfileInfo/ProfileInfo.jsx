import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)  {
        return <Preloader/>
    }
    return (
        <div className={styles.profileInfo}>
            <div>
                <img className={styles.profileImg}
                     alt={'Profile header background'}
                     src='https://images.unsplash.com/photo-1496889748357-08060ad87d28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2124&q=80'/>
            </div>
            <div className={styles.description}>
                <img src={props.profile.photos.large}/>
                <div>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;