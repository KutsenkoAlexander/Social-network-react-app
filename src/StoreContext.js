import React from 'react';

const StoreContext = React.createContext(null);

export const StoreProvider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;