import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userAvatar from '../../../assets/img/avatar.jfif';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = React.memo(({
                                    profile,
                                    status,
                                    updateStatus,
                                    isOwner,
                                    saveAvatar
}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    }

    return (
        <div className={styles.profileInfo}>
            <div className={styles.description}>
                <div>
                    <img src={profile.photos.large ? profile.photos.large : userAvatar} alt={'User avatar'}/>
                    {isOwner && <input type={'file'} onChange={onAvatarSelected}/>}
                </div>
                <div>
                    <h3>{profile.fullName}</h3>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <p>Description: {profile.aboutMe}</p>
                    <p>Looking for job: {profile.lookingForAJob}</p>
                    <p>Job description: {profile.lookingForAJobDescription}</p>
                </div>
                <div>
                    <h4>Contacts</h4>
                    <p>Facebook: {profile.contacts.facebook}</p>
                    <p>Website: {profile.contacts.website}</p>
                    <p>VK: {profile.contacts.vk}</p>
                    <p>Twitter: {profile.contacts.twitter}</p>
                    <p>Instagram: {profile.contacts.instagram}</p>
                    <p>Youtube: {profile.contacts.youtube}</p>
                    <p>Github: {profile.contacts.github}</p>
                    <p>Main link: {profile.contacts.mainLink}</p>
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;