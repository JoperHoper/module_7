import { useState, useEffect, useReducer } from "react";
// hooks are usually named exports rather than default
export function useData(url) {
    // state variable for holding fetched json data

    const [data, dispatch] = useReducer(getDataReducer, { loading: true, data: [], error: "" });

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (url) {
            let ignore = false;
            // setLoading(true);
            dispatch({ type: getDataReducerActions.FETCH_LOADING, payload: [], err: '' });
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    if (!ignore) {
                        dispatch({ type: getDataReducerActions.FETCH_SUCCESS, payload: json, err: '' })
                        // setLoading(false);
                        // setData(json);
                    }
                })
                .catch((error) => {
                    dispatch({ type: getDataReducerActions.FETCH_ERROR, payload: [], error: error })
                });
            // cleanup function, in case url changes before complete
            return () => {
                ignore = true;
            };
        }
    }, [url]); // re-run effect if url changes

    // return the data fetched from the given url
    return [data, data.loading];
}
// save as useData.jsx in the 'hooks' folder

export const getDataReducerActions = {
    // ACTION_TYPES
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
    FETCH_LOADING: "FETCH_LOADING",
}

export function getDataReducer(state, action) {
    // TELL ME WHAT ACTION IS FIRED
    console.log("Action is fired: ", action.type, action.payload);

    switch (action.type) {
        case getDataReducerActions.FETCH_SUCCESS:
            return { loading: false, data: action.payload, error: "" };
        case getDataReducerActions.FETCH_ERROR:
            return { loading: false, data: [], error: action.error };
        case getDataReducerActions.FETCH_LOADING:
            return { loading: true, data: state.data, error: state.error };
        default:
            return state;
    }
}