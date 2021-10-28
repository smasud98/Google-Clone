import React, { createContext, useContext, useReducer} from 'react';

// Set up data layer
export const StateContext = createContext()

export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)

// Allows pulling info from data layer
export const useStateValue = () => useContext(StateContext);