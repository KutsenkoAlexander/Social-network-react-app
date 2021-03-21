import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {compose} from 'redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPostContainer: () => dispatch(addPostActionCreator()),
        updateNewPostTextContainer: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);