import React, { createContext, useContext, useReducer } from "react";

const userReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, currentUser: action.payload };
        case "TOGGLE_MODE":
            return { ...state, mode: state.mode === "light" ? "dark" : "light" }
        default:
            return state;
    }
}

const intitalState = {
    currentUser: { name: "Guest", email: "" },
    mode: "light"
}
// 1. Create the context
const UserContext = createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>

export const UserProvider = (props) => {
    // store the current user in state at the top level
    const [state, dispatch] = useReducer(userReducer, intitalState);

    const toggleMode = () => {
        dispatch({ type: "TOGGLE_MODE" });
    }
    // sets user object in state, shared via context
    const handleUpdateUser = (user) => {
        dispatch({ type: "UPDATE_USER", payload: user });
    }
    // 2. Provide the context.
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current user and an update function
    return (
        <UserContext.Provider value={{ ...state, handleUpdateUser, toggleMode }}>
            {props.children}
        </UserContext.Provider>
    );
}
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useUserContext = () => {
    return useContext(UserContext);
}
// Save as UserContext.jsx in a separate 'context' folder