import Navigation from './Navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getNavigationSelector} from "../../../redux/sidebarSelector";

const mapStateToProps = (state) => ({
    navigation: getNavigationSelector(state)
})

export default compose(
    connect(mapStateToProps)
)(Navigation);