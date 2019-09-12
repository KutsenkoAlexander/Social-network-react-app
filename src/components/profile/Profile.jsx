import React from 'react';
import style from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./info/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
}

export default Profile;