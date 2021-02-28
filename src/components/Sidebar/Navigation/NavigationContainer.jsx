import Navigation from "./Navigation";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        navigation: state.sidebar.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;