import React from "react";
import Navigation from "./Navigation";

const NavigationContainer = (props) => {
    return <Navigation navigation={props.store.getState().sidebar.navigation} />
}

export default NavigationContainer;