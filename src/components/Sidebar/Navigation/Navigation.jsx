import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
    let navigationElements =
        props.navigation.map(navItem => <NavigationItem path={navItem.path}
                                                        key={navItem.id}
                                                        name={navItem.name}/>);

    return (<nav>{navigationElements}</nav>);
}

export default Navigation;