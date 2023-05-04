import { createContext, useReducer,useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [],
};

const STORAGE_KEY = "record-transactions";

const storedState = JSON.parse(localStorage.getItem(STORAGE_KEY));

export const GlobalContext = createContext(initialState); 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, storedState || initialState);

    useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);
    
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE",
            payload:id,
        });
    };

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD",
            payload:transaction,
        })      
    }
    
    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    );
};