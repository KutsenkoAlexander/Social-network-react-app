import React from "react";
import Navigation from "./Navigation";
import StoreContext from "../../../StoreContext";

const NavigationContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => <Navigation navigation={store.getState().sidebar.navigation}/>
        }
    </StoreContext.Consumer>
}

export default NavigationContainer;