import React from "react";
import './Profile.css';

function Profile() {
    return <div className="App-profile">
        <div>
            <img
                src="https://images.unsplash.com/photo-1496889748357-08060ad87d28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2124&q=80"/>
        </div>
        <div>ava + description</div>
        <div>
            My posts
            <div>New post</div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    </div>;
}


export default Profile;