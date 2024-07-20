import ClockDisplay from "../components/ClockDisplay"
import { useState, useEffect, useRef, useReducer } from "react";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { ssrImportKey } from "vite/runtime";

export const SlideWork = () => {

    return (
        <div>
            <div
                style={{ border: "solid blue 1px", padding: "10px", margin: "10px" }}
            >
                <NameComponent name={"Andy"} />
            </div>
            <div style={{ border: "solid blue 1px", padding: "10px", margin: "10px" }}>
                <p>Reducer Example</p>
                <ReducerExample />
            </div>
            <div style={{ border: "solid blue 1px", padding: "10px", margin: "10px" }}>
                <PostListReducer />
            </div>
        </div>
    );
};

const NameComponent = ({ name }) => {

    const nameRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            nameRef.current.textContent = "Your name is Josephine!";
            nameRef.current.style.color = "red";
        }, 5000);
    }, [])

    return (
        <div ref={nameRef}>{name}</div>
    )
}

const ReducerExample = () => {
    const { currentUser, handleUpdateUser } = useUserContext();

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_MOVIE":
                const cloneState = [...state]
                cloneState.listOfMovies.push({ title: "The Matrix", year: 1988 })
                return cloneState;
            case "DELETE_MOVIE":
                updateState = [...state].filter((movie) => {
                    movie.title !== "The Lighthouse"
                })
                return updateState;
            default:
                return [...state]
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        listOfMovies: [
            { title: "Inside Out 2", year: 2024 },
            { title: "Edge of Tomorrow", year: 2002 },
            { title: "The Lighthouse", year: 1998 }
        ]
    });

    const MoviesDisplayHandler = () => {
        return state.listOfMovies.map((movie) => {
            return <li key={movie.title}>{movie.title}</li>
        })
    }

    const addMovie = () => {
        dispatch[{ type: "ADD_MOVIE" }]
    }

    const deleteMovie = () => {
        dispatch[{ type: "DELETE_MOVIE" }]
    }

    return (
        <div>
            <p>{currentUser.name}</p>
            <ul>{MoviesDisplayHandler()}</ul>
            <button onClick={addMovie}>Add</button>
            <button onClick={deleteMovie}>Delete</button>
        </div>
    )
}

const PostListReducer = () => {
    const [postsResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
        loading: true, // true when loading and no data in posts
        posts: [], // empty until data is fetched
        error: '' // empty unless there was an error
    })

    const reducerActions = {
        FETCH_SUCCESS: "FETCH_SUCCESS",
        FETCH_ERROR: "FETCH_ERROR",
        FETCH_CLEAR: "FETCH_CLEAR"
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // modify this URL to test the error case
            .then(response => {
                // object passed to dispatch holds all data needed for updating state: both type of update and associated data
                dispatch({ type: reducerActions.FETCH_SUCCESS, payload: response.data }) // dispatch calls reducer function and triggers re-render
            })
            .catch(error => {
                dispatch({ type: reducerActions.FETCH_ERROR, payload: error.message }) // lets us handle different types of state changes differently
            })
    }, []);

    // reducer function for axios fetch response
    // called from dispatch when state is updated, lets us handle different actions
    // return object should match same structure as initial state passed to useReducer
    function reducer(postsResult, action) {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return { loading: false, posts: action.payload, error: '' }
            case 'FETCH_ERROR':
                return { loading: false, posts: [], error: action.payload }
            default:
                return { ...postsResult, loading: false }
        }
    } // What would this component look like using useState instead of useReducer?
    // returned JSX uses the 3 things stored in postsResult state object to conditionally render data or an error message

    return (
        <div className="PostList componentBox">
            {postsResult.loading ? <div>Loading posts...</div> :
                postsResult.posts.map(post => ( // list of posts is just one of the things stored in the postsResult state object
                    <div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.body}</p></div>
                ))}
            <div className="error">{postsResult.error}</div>
            <button onClick={() => dispatch({ type: reducerActions.FETCH_CLEAR })}>Clear post</button>
        </div>
    )
}

