
import { createContext, useEffect, useState, useContext, useReducer } from 'react';
import { AuthContext } from './AuthContext';


export const ChatContext = createContext();


// children are the components
// all auth is contained within firebase
// we wrapped our entire app around the auth provider in main.jsx
export const ChatContextProvider = ({ children }) => { 

    const {currUser} = useContext(AuthContext);
    const INITIAL_STAE = {
        chatId:"null",
        user: {}
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: currUser.uid > action.payload.uid 
                    ? currUser.uid + action.payload.uid 
                    : action.payload.uid + currUser.uid
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, INITIAL_STAE);

    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}

