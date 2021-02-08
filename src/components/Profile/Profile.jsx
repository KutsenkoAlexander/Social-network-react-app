import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={styles.profileImg}
                    src="https://images.unsplash.com/photo-1496889748357-08060ad87d28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2124&q=80"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
}


export default Profile;