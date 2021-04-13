import {addPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {compose} from 'redux';
import React from "react";
import {getPostsSelector} from "../../../redux/profileSelector";

const MyPostsContainer = React.memo((props) => {
    const addPost = async (values) => {
        props.addPost(values.newPostText);
    }

    return <MyPosts addPost={addPost} posts={props.posts}/>
})

const mapStateToProps = (state) => ({
    posts: getPostsSelector(state)
});

export default compose(
    connect(mapStateToProps, {addPost})
)(MyPostsContainer);