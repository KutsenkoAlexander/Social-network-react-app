import Friends from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);