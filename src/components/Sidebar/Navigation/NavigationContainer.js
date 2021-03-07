import Navigation from './Navigation';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        navigation: state.sidebar.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);