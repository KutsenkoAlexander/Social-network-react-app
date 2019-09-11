import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./my_posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={style.app_profile_image}>
                <img src="https://cdn.pixabay.com/photo/2016/01/30/17/22/africa-1170055__340.jpg" alt="Profile"/>
            </div>
            <div className={style.app_profile_info}>
                <img
                    src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/blond_boy_face_avatar-512.png"
                    alt="Avatart"/>
                <p className={style.app_profile_description}>
                    Profile description
                </p>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;