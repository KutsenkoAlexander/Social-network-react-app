import {addPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {compose} from 'redux';
import React from "react";

class MyPostsContainer extends React.Component {
    addPost = async values => {
        this.props.addPost(values.newPostText);
    }

    render() {
        return <MyPosts addPost={this.addPost} posts={this.props.posts}/>
    };
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};

export default compose(
    connect(mapStateToProps, {addPost})
)(MyPostsContainer);