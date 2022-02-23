import React, { createContext, useReducer } from "react";
import { Reducer } from "../reducer/Reducers";

export const UsersContext = createContext();

function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, {
        list: [],
        details: {},
    });
    return (
        <>
            <UsersContext.Provider value={[state, dispatch]}>
                {children}
            </UsersContext.Provider>
        </>
    )
}

export default UsersProvider;
