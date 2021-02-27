import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {
    return <Friends friends={props.store.getState().sidebar.friends} />;
}

export default FriendsContainer;