import React from 'react';
import Posts from "./posts/Posts";
import ProfileInfo from "./info/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.posts}/>
        </div>
    );
};

export default Profile;