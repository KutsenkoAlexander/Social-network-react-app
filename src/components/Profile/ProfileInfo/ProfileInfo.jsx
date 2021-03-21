import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userAvatar from '../../../assets/img/avatar.jfif';

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
                <img src={props.profile.photos.large ? props.profile.photos.large : userAvatar} alt={'User avatar'}/>
                <div>
                    <h3>{props.profile.fullName}</h3>
                    <p>Description: {props.profile.aboutMe}</p>
                    <p>Looking for job: {props.profile.lookingForAJob}</p>
                    <p>Job description: {props.profile.lookingForAJobDescription}</p>
                </div>
                <div>
                    <h4>Contacts</h4>
                    <p>Facebook: {props.profile.contacts.facebook}</p>
                    <p>Website: {props.profile.contacts.website}</p>
                    <p>VK: {props.profile.contacts.vk}</p>
                    <p>Twitter: {props.profile.contacts.twitter}</p>
                    <p>Instagram: {props.profile.contacts.instagram}</p>
                    <p>youtube: {props.profile.contacts.youtube}</p>
                    <p>Github: {props.profile.contacts.github}</p>
                    <p>Main link: {props.profile.contacts.mainLink}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;