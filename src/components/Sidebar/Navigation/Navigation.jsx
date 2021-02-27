import React from "react";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = (props) => {
    let navigationElements =
        props.navigation.map(navItem => <NavigationItem path={navItem.path}
                                                        name={navItem.name}/>);

    return (<nav>{navigationElements}</nav>);
}

export default Navigation;