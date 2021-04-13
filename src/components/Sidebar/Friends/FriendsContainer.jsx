import Friends from './Friends';
import {connect} from 'react-redux';
import {getFriendsSelector} from "../../../redux/sidebarSelector";

const mapStateToProps = (state) => ({
    friends: getFriendsSelector(state)
});

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);