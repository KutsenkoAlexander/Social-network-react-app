import Navigation from './Navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';

const mapStateToProps = (state) => {
    return {
        navigation: state.sidebar.navigation
    }
};

export default compose(
    connect(mapStateToProps)
)(Navigation);