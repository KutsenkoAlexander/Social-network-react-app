import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userAvatar from '../../../assets/img/avatar.jfif';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from "./ProfileDataForm";
import {FORM_ERROR} from "final-form";
import ProfileContact from "./ProfileContact";

const ProfileInfo = React.memo(({
                                    profile,
                                    status,
                                    updateStatus,
                                    isOwner,
                                    saveAvatar,
                                    saveProfile,
                                    profileId
}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = async (values) => {
        let promise = {
            [FORM_ERROR]: await saveProfile(values)
        }
        if (!promise[FORM_ERROR]) {
            setEditMode(false);
        }
        return promise
    }

    return (
        <div className={styles.profileInfo}>
            <div className={styles.description}>
                <div>
                    <img src={profile.photos.large ? profile.photos.large : userAvatar} alt={'User avatar'}/>
                    {isOwner && <input type={'file'} onChange={onAvatarSelected}/>}
                    {(isOwner && !editMode) && <button onClick={activateEditMode}>Edit profile</button>}
                </div>
                {
                    editMode
                    ? <ProfileDataForm profile={profile}
                                       onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   status={status}
                                   updateStatus={updateStatus}/>
                }
            </div>
        </div>
    );
});

const ProfileData = ({profile, status, updateStatus}) => {
    return <div className={styles.profileData}>
        <div>
            <h3>{profile.fullName}</h3>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <p>About me: {profile.aboutMe}</p>
            <p>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</p>
            {profile.lookingForAJob &&
            <div>
                <p>Skills: {profile.lookingForAJobDescription}</p>
            </div>
            }
        </div>
        <div>
            <p><b>Contacts:</b></p>
            {Object.keys(profile.contacts)
                .map(key => {
                    return <ProfileContact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })
            }
        </div>
    </div>
}

export default ProfileInfo;