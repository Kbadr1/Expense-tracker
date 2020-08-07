import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

const intialState = {
    transactions: []
}

export const GlobalContext = createContext(intialState);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    const deleteTransaction = id => {
        dispatch({
            type: "DELTE_TRANSACTION",
            payload: id
        })
    }

    const addTransaction = transaction => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
}
 
export default GlobalProvider;